/**
 * Seed script.
 *
 * Loads the canonical batch from the FillerConnector (which runs seed data
 * through the normalization layer) and inserts it into the database. This
 * exercises the full path: filler raw data, normalization, canonical records,
 * persistence. It makes no external calls.
 *
 * Idempotent: it clears the Phase 1 tables first, so re-running reseeds cleanly.
 *
 * Run with: npm run db:seed
 */

import "dotenv/config";
import { eq } from "drizzle-orm";
import { getSeedConnector } from "@ingestion/index";
import { createDb } from "./client";
import {
  accounts,
  categories,
  holdings,
  liabilities,
  lineItems,
  merchants,
  transactions,
} from "./schema";

// numeric columns are stored as strings for exactness.
const dec2 = (n: number): string => n.toFixed(2);
const dec4 = (n: number): string => n.toFixed(4);
const dec6 = (n: number): string => n.toFixed(6);
const dec3 = (n: number): string => n.toFixed(3);

async function main(): Promise<void> {
  const connector = getSeedConnector();
  console.log(`Seeding from connector: ${connector.name}`);
  const batch = await connector.fetch();

  const { db, close } = await createDb();

  try {
    // Clear in FK-safe order.
    console.log("Clearing existing data ...");
    await db.delete(lineItems);
    await db.delete(transactions);
    await db.delete(holdings);
    await db.delete(liabilities);
    await db.delete(accounts);
    await db.delete(merchants);
    await db.delete(categories);

    // --- Categories (two passes for the self-referential hierarchy) ---
    console.log(`Inserting ${batch.categories.length} categories ...`);
    const insertedCategories = await db
      .insert(categories)
      .values(batch.categories.map((c) => ({ name: c.name })))
      .returning({ id: categories.id, name: categories.name });
    const categoryIdByName = new Map(insertedCategories.map((c) => [c.name, c.id]));

    for (const category of batch.categories) {
      if (!category.parentName) continue;
      const id = categoryIdByName.get(category.name);
      const parentId = categoryIdByName.get(category.parentName);
      if (!id || !parentId) {
        throw new Error(`Category hierarchy reference missing for ${category.name}`);
      }
      await db
        .update(categories)
        .set({ parentId })
        .where(eq(categories.id, id));
    }

    // --- Merchants ---
    console.log(`Inserting ${batch.merchants.length} merchants ...`);
    const insertedMerchants = await db
      .insert(merchants)
      .values(
        batch.merchants.map((m) => ({
          canonicalName: m.canonicalName,
          aliases: m.aliases,
        })),
      )
      .returning({ id: merchants.id, canonicalName: merchants.canonicalName });
    const merchantIdByName = new Map(
      insertedMerchants.map((m) => [m.canonicalName, m.id]),
    );

    // --- Accounts ---
    console.log(`Inserting ${batch.accounts.length} accounts ...`);
    const insertedAccounts = await db
      .insert(accounts)
      .values(
        batch.accounts.map((a) => ({
          externalId: a.externalId,
          name: a.name,
          institution: a.institution,
          type: a.type,
          currency: a.currency,
          ingestionStrategy: a.ingestionStrategy,
          lastSynced: a.lastSynced ? new Date(a.lastSynced) : null,
        })),
      )
      .returning({ id: accounts.id, externalId: accounts.externalId });
    const accountIdByExternal = new Map(
      insertedAccounts.map((a) => [a.externalId, a.id]),
    );

    // --- Transactions ---
    console.log(`Inserting ${batch.transactions.length} transactions ...`);
    const transactionRows = batch.transactions.map((t) => {
      const accountId = accountIdByExternal.get(t.accountExternalId);
      if (!accountId) {
        throw new Error(`Transaction references unknown account ${t.accountExternalId}`);
      }
      return {
        externalId: t.externalId,
        accountId,
        postedDate: t.postedDate,
        amount: dec2(t.amount),
        rawDescription: t.rawDescription,
        merchantId: t.merchantName ? (merchantIdByName.get(t.merchantName) ?? null) : null,
        categoryId: t.categoryName ? (categoryIdByName.get(t.categoryName) ?? null) : null,
        sourceStrategy: t.sourceStrategy,
      };
    });
    const insertedTransactions = await db
      .insert(transactions)
      .values(transactionRows)
      .returning({ id: transactions.id, externalId: transactions.externalId });
    const transactionIdByExternal = new Map(
      insertedTransactions.map((t) => [t.externalId, t.id]),
    );

    // --- Line items ---
    console.log(`Inserting ${batch.lineItems.length} line items ...`);
    if (batch.lineItems.length > 0) {
      const lineItemRows = batch.lineItems.map((li) => {
        const transactionId = transactionIdByExternal.get(li.transactionExternalId);
        if (!transactionId) {
          throw new Error(
            `Line item references unknown transaction ${li.transactionExternalId}`,
          );
        }
        return {
          transactionId,
          name: li.name,
          quantity: dec4(li.quantity),
          unitPrice: dec2(li.unitPrice),
          lineTotal: dec2(li.lineTotal),
        };
      });
      await db.insert(lineItems).values(lineItemRows);
    }

    // --- Holdings ---
    console.log(`Inserting ${batch.holdings.length} holdings ...`);
    if (batch.holdings.length > 0) {
      await db.insert(holdings).values(
        batch.holdings.map((h) => {
          const accountId = accountIdByExternal.get(h.accountExternalId);
          if (!accountId) {
            throw new Error(`Holding references unknown account ${h.accountExternalId}`);
          }
          return {
            accountId,
            symbol: h.symbol,
            quantity: dec6(h.quantity),
            costBasis: dec2(h.costBasis),
            asOfDate: h.asOfDate,
          };
        }),
      );
    }

    // --- Liabilities ---
    console.log(`Inserting ${batch.liabilities.length} liabilities ...`);
    if (batch.liabilities.length > 0) {
      await db.insert(liabilities).values(
        batch.liabilities.map((l) => {
          const accountId = accountIdByExternal.get(l.accountExternalId);
          if (!accountId) {
            throw new Error(`Liability references unknown account ${l.accountExternalId}`);
          }
          return {
            accountId,
            principal: dec2(l.principal),
            rate: dec3(l.rate),
            rateType: l.rateType,
            minimumPayment: dec2(l.minimumPayment),
            payoffTerms: l.payoffTerms,
          };
        }),
      );
    }

    console.log("Seed complete.");
  } finally {
    await close();
  }
}

main().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
