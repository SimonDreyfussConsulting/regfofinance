/**
 * Data-access layer.
 *
 * The single place that reads numbers from the database. Every figure shown in
 * the UI traces back to one of these queries. Nothing here estimates or
 * computes a headline figure outside of SQL. Numeric columns come back from the
 * driver as strings, so aggregates are cast to float8 and the few raw numeric
 * columns are converted with Number() right here, never in a component.
 */

import "server-only";
import { and, eq, lt, sql } from "drizzle-orm";
import { alias } from "drizzle-orm/pg-core";
import { getDb } from "@db/client";
import {
  accounts,
  categories,
  holdings,
  lineItems,
  liabilities,
  merchants,
  transactions,
} from "@db/schema";

export interface NetWorthSummary {
  netWorth: number;
  assets: number;
  debts: number;
  cash: number;
  investments: number;
  realEstate: number;
  creditOwed: number;
  loansOwed: number;
}

export async function getNetWorthSummary(): Promise<NetWorthSummary> {
  const db = await getDb();

  const [cashRow] = await db
    .select({
      total: sql<number>`coalesce(sum(${transactions.amount}), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(accounts, eq(transactions.accountId, accounts.id))
    .where(sql`${accounts.type} in ('depository', 'hsa')`);

  const [realEstateRow] = await db
    .select({
      total: sql<number>`coalesce(sum(${transactions.amount}), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(accounts, eq(transactions.accountId, accounts.id))
    .where(sql`${accounts.type} = 'other'`);

  const [creditRow] = await db
    .select({
      total: sql<number>`coalesce(sum(${transactions.amount}), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(accounts, eq(transactions.accountId, accounts.id))
    .where(sql`${accounts.type} = 'credit'`);

  const [investmentsRow] = await db
    .select({
      total: sql<number>`coalesce(sum(${holdings.costBasis}), 0)::float8`,
    })
    .from(holdings);

  const [liabilitiesRow] = await db
    .select({
      total: sql<number>`coalesce(sum(${liabilities.principal}), 0)::float8`,
    })
    .from(liabilities);

  const cash = cashRow?.total ?? 0;
  const realEstate = realEstateRow?.total ?? 0;
  const creditBalance = creditRow?.total ?? 0; // negative when money is owed
  const investments = investmentsRow?.total ?? 0;
  const loansOwed = liabilitiesRow?.total ?? 0;

  const assets = cash + realEstate + investments;
  const creditOwed = Math.max(0, -creditBalance);
  const debts = creditOwed + loansOwed;
  const netWorth = assets - debts;

  return {
    netWorth,
    assets,
    debts,
    cash,
    investments,
    realEstate,
    creditOwed,
    loansOwed,
  };
}

export interface AccountBalance {
  id: string;
  name: string;
  institution: string;
  type: string;
  balance: number;
}

export async function getAccountBalances(): Promise<AccountBalance[]> {
  const db = await getDb();

  // Balance source by type:
  //   depository, credit, hsa, other: sum of transactions
  //   investment: sum of holdings cost basis
  //   loan: negative of liabilities principal
  const rows = await db.execute(sql`
    select
      a.id,
      a.name,
      a.institution,
      a.type::text as type,
      case
        when a.type = 'investment' then coalesce((
          select sum(h.cost_basis) from ${holdings} h where h.account_id = a.id
        ), 0)
        when a.type = 'loan' then -coalesce((
          select sum(l.principal) from ${liabilities} l where l.account_id = a.id
        ), 0)
        else coalesce((
          select sum(t.amount) from ${transactions} t where t.account_id = a.id
        ), 0)
      end::float8 as balance
    from ${accounts} a
    order by
      case a.type
        when 'depository' then 1
        when 'investment' then 2
        when 'hsa' then 3
        when 'other' then 4
        when 'credit' then 5
        when 'loan' then 6
        else 7
      end,
      a.name
  `);

  return [...rows] as unknown as AccountBalance[];
}

export interface CategorySpend {
  id: string;
  name: string;
  total: number;
}

const parentCategory = alias(categories, "parent_category");

/** Top-level category spending (outflows), with child categories rolled up. */
export async function getSpendingByCategory(): Promise<CategorySpend[]> {
  const db = await getDb();

  const rows = await db
    .select({
      id: sql<string>`coalesce(${parentCategory.id}, ${categories.id})`,
      name: sql<string>`coalesce(${parentCategory.name}, ${categories.name})`,
      total: sql<number>`coalesce(sum(-${transactions.amount}), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(parentCategory, eq(categories.parentId, parentCategory.id))
    .where(
      and(
        lt(transactions.amount, "0"),
        sql`coalesce(${parentCategory.name}, ${categories.name}) <> 'Transfers'`,
      ),
    )
    .groupBy(
      sql`coalesce(${parentCategory.id}, ${categories.id})`,
      sql`coalesce(${parentCategory.name}, ${categories.name})`,
    )
    .orderBy(sql`coalesce(sum(-${transactions.amount}), 0)::float8 desc`);

  return rows;
}

/** Total outflow for a top-level category (its children rolled up). */
export async function getCategorySpendTotal(categoryId: string): Promise<number> {
  const db = await getDb();
  const [row] = await db
    .select({
      total: sql<number>`coalesce(sum(-${transactions.amount}), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(parentCategory, eq(categories.parentId, parentCategory.id))
    .where(
      and(
        lt(transactions.amount, "0"),
        sql`coalesce(${parentCategory.id}, ${categories.id}) = ${categoryId}`,
      ),
    );
  return row?.total ?? 0;
}

export async function getCategoryName(id: string): Promise<string | null> {
  const db = await getDb();
  const [row] = await db
    .select({ name: categories.name })
    .from(categories)
    .where(eq(categories.id, id));
  return row?.name ?? null;
}

export interface MerchantSpend {
  id: string;
  name: string;
  total: number;
  count: number;
}

/** Merchant spending within a top-level category (its children included). */
export async function getMerchantsForCategory(categoryId: string): Promise<MerchantSpend[]> {
  const db = await getDb();

  const rows = await db
    .select({
      id: merchants.id,
      name: merchants.canonicalName,
      total: sql<number>`coalesce(sum(-${transactions.amount}), 0)::float8`,
      count: sql<number>`count(*)::int`,
    })
    .from(transactions)
    .innerJoin(merchants, eq(transactions.merchantId, merchants.id))
    .innerJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(parentCategory, eq(categories.parentId, parentCategory.id))
    .where(
      and(
        lt(transactions.amount, "0"),
        sql`coalesce(${parentCategory.id}, ${categories.id}) = ${categoryId}`,
      ),
    )
    .groupBy(merchants.id, merchants.canonicalName)
    .orderBy(sql`coalesce(sum(-${transactions.amount}), 0)::float8 desc`);

  return rows;
}

export async function getMerchantName(id: string): Promise<string | null> {
  const db = await getDb();
  const [row] = await db
    .select({ name: merchants.canonicalName })
    .from(merchants)
    .where(eq(merchants.id, id));
  return row?.name ?? null;
}

export interface TransactionRow {
  id: string;
  postedDate: string;
  amount: number;
  rawDescription: string;
  accountName: string;
  hasLineItems: boolean;
}

export async function getTransactionsForMerchant(
  merchantId: string,
): Promise<TransactionRow[]> {
  const db = await getDb();

  const rows = await db
    .select({
      id: transactions.id,
      postedDate: transactions.postedDate,
      amount: sql<number>`${transactions.amount}::float8`,
      rawDescription: transactions.rawDescription,
      accountName: accounts.name,
      hasLineItems: sql<boolean>`exists (
        select 1 from ${lineItems} li where li.transaction_id = ${transactions.id}
      )`,
    })
    .from(transactions)
    .innerJoin(accounts, eq(transactions.accountId, accounts.id))
    .where(eq(transactions.merchantId, merchantId))
    .orderBy(sql`${transactions.postedDate} desc`);

  return rows;
}

export interface TransactionDetail {
  id: string;
  postedDate: string;
  amount: number;
  rawDescription: string;
  accountName: string;
  merchantName: string | null;
  categoryName: string | null;
  sourceStrategy: string;
}

export async function getTransaction(id: string): Promise<TransactionDetail | null> {
  const db = await getDb();
  const [row] = await db
    .select({
      id: transactions.id,
      postedDate: transactions.postedDate,
      amount: sql<number>`${transactions.amount}::float8`,
      rawDescription: transactions.rawDescription,
      accountName: accounts.name,
      merchantName: merchants.canonicalName,
      categoryName: categories.name,
      sourceStrategy: sql<string>`${transactions.sourceStrategy}::text`,
    })
    .from(transactions)
    .innerJoin(accounts, eq(transactions.accountId, accounts.id))
    .leftJoin(merchants, eq(transactions.merchantId, merchants.id))
    .leftJoin(categories, eq(transactions.categoryId, categories.id))
    .where(eq(transactions.id, id));
  return row ?? null;
}

export interface LineItemRow {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export async function getLineItems(transactionId: string): Promise<LineItemRow[]> {
  const db = await getDb();
  const rows = await db
    .select({
      id: lineItems.id,
      name: lineItems.name,
      quantity: sql<number>`${lineItems.quantity}::float8`,
      unitPrice: sql<number>`${lineItems.unitPrice}::float8`,
      lineTotal: sql<number>`${lineItems.lineTotal}::float8`,
    })
    .from(lineItems)
    .where(eq(lineItems.transactionId, transactionId))
    .orderBy(lineItems.name);
  return rows;
}

/** Sum of a transaction's line item totals, computed in SQL. */
export async function getLineItemsTotal(transactionId: string): Promise<number> {
  const db = await getDb();
  const [row] = await db
    .select({
      total: sql<number>`coalesce(sum(${lineItems.lineTotal}), 0)::float8`,
    })
    .from(lineItems)
    .where(eq(lineItems.transactionId, transactionId));
  return row?.total ?? 0;
}

export interface MonthlyCashFlow {
  month: string;
  income: number;
  spending: number;
}

export async function getMonthlyCashFlow(): Promise<MonthlyCashFlow[]> {
  const db = await getDb();
  const rows = await db
    .select({
      month: sql<string>`to_char(${transactions.postedDate}, 'YYYY-MM')`,
      income: sql<number>`coalesce(sum(case when coalesce(${parentCategory.name}, ${categories.name}) = 'Income' then ${transactions.amount} else 0 end), 0)::float8`,
      spending: sql<number>`coalesce(sum(case when ${transactions.amount} < 0 and coalesce(${parentCategory.name}, ${categories.name}) <> 'Transfers' then -${transactions.amount} else 0 end), 0)::float8`,
    })
    .from(transactions)
    .innerJoin(categories, eq(transactions.categoryId, categories.id))
    .leftJoin(parentCategory, eq(categories.parentId, parentCategory.id))
    .where(sql`${transactions.rawDescription} not in ('OPENING BALANCE', 'MANUAL HOME VALUATION ESTIMATE')`)
    .groupBy(sql`to_char(${transactions.postedDate}, 'YYYY-MM')`)
    .orderBy(sql`to_char(${transactions.postedDate}, 'YYYY-MM')`);

  return rows;
}
