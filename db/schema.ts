/**
 * The canonical ledger schema.
 *
 * This is the persisted form of the canonical records defined in
 * /normalization/canonical.ts. Treat it as a contract. Later phases extend it
 * only by additive migration.
 *
 * Reserved future tables, intentionally not created in Phase 1:
 *   macro_series, market_prices, news_items, proposals, advisor_state.
 * Add them later as new additive migrations. Do not repurpose existing columns.
 *
 * Note on monetary and quantity columns: they are stored as SQL numeric for
 * exactness. Drizzle returns numeric as a string. The data-access layer in
 * web/lib is the single place that converts these strings into numbers for
 * display, so every displayed figure still traces to a query.
 */

import { relations } from "drizzle-orm";
import {
  date,
  integer,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  type AnyPgColumn,
} from "drizzle-orm/pg-core";

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const accountTypeEnum = pgEnum("account_type", [
  "depository",
  "credit",
  "investment",
  "loan",
  "hsa",
  "other",
]);

export const ingestionStrategyEnum = pgEnum("ingestion_strategy", [
  "filler",
  "plaid",
  "simplefin",
  "teller",
  "mailbox",
  "document",
  "scraper",
  "manual",
]);

export const rateTypeEnum = pgEnum("rate_type", ["fixed", "variable"]);

// ---------------------------------------------------------------------------
// Tables
// ---------------------------------------------------------------------------

export const categories = pgTable("categories", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  // Self-referential hierarchy. Null for a top-level category.
  parentId: uuid("parent_id").references((): AnyPgColumn => categories.id),
});

export const merchants = pgTable("merchants", {
  id: uuid("id").primaryKey().defaultRandom(),
  canonicalName: text("canonical_name").notNull().unique(),
  // Alternate spellings seen in raw descriptions.
  aliases: text("aliases").array().notNull().default([]),
});

export const accounts = pgTable("accounts", {
  id: uuid("id").primaryKey().defaultRandom(),
  // Stable natural key from the connector. Operational, not displayed.
  externalId: text("external_id").notNull().unique(),
  name: text("name").notNull(),
  institution: text("institution").notNull(),
  type: accountTypeEnum("type").notNull(),
  currency: text("currency").notNull().default("USD"),
  ingestionStrategy: ingestionStrategyEnum("ingestion_strategy").notNull(),
  lastSynced: timestamp("last_synced", { withTimezone: true }),
});

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey().defaultRandom(),
  externalId: text("external_id").notNull().unique(),
  accountId: uuid("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  postedDate: date("posted_date").notNull(),
  // Signed amount. Negative is money out, positive is money in.
  amount: numeric("amount", { precision: 14, scale: 2 }).notNull(),
  rawDescription: text("raw_description").notNull(),
  merchantId: uuid("merchant_id").references(() => merchants.id),
  categoryId: uuid("category_id").references(() => categories.id),
  sourceStrategy: ingestionStrategyEnum("source_strategy").notNull(),
});

export const lineItems = pgTable("line_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  transactionId: uuid("transaction_id")
    .notNull()
    .references(() => transactions.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  quantity: numeric("quantity", { precision: 14, scale: 4 }).notNull(),
  unitPrice: numeric("unit_price", { precision: 14, scale: 2 }).notNull(),
  lineTotal: numeric("line_total", { precision: 14, scale: 2 }).notNull(),
});

export const holdings = pgTable("holdings", {
  id: uuid("id").primaryKey().defaultRandom(),
  accountId: uuid("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  symbol: text("symbol").notNull(),
  quantity: numeric("quantity", { precision: 18, scale: 6 }).notNull(),
  costBasis: numeric("cost_basis", { precision: 14, scale: 2 }).notNull(),
  asOfDate: date("as_of_date").notNull(),
});

export const liabilities = pgTable("liabilities", {
  id: uuid("id").primaryKey().defaultRandom(),
  accountId: uuid("account_id")
    .notNull()
    .references(() => accounts.id, { onDelete: "cascade" }),
  principal: numeric("principal", { precision: 14, scale: 2 }).notNull(),
  // Annual interest rate as a percentage, for example 6.500.
  rate: numeric("rate", { precision: 6, scale: 3 }).notNull(),
  rateType: rateTypeEnum("rate_type").notNull(),
  minimumPayment: numeric("minimum_payment", { precision: 14, scale: 2 }).notNull(),
  payoffTerms: text("payoff_terms").notNull(),
  // Reserved for future use; kept simple in Phase 1.
  termMonths: integer("term_months"),
});

// ---------------------------------------------------------------------------
// Relations (for typed joins in the data-access layer)
// ---------------------------------------------------------------------------

export const categoriesRelations = relations(categories, ({ one, many }) => ({
  parent: one(categories, {
    fields: [categories.parentId],
    references: [categories.id],
    relationName: "category_hierarchy",
  }),
  children: many(categories, { relationName: "category_hierarchy" }),
  transactions: many(transactions),
}));

export const merchantsRelations = relations(merchants, ({ many }) => ({
  transactions: many(transactions),
}));

export const accountsRelations = relations(accounts, ({ many }) => ({
  transactions: many(transactions),
  holdings: many(holdings),
  liabilities: many(liabilities),
}));

export const transactionsRelations = relations(transactions, ({ one, many }) => ({
  account: one(accounts, {
    fields: [transactions.accountId],
    references: [accounts.id],
  }),
  merchant: one(merchants, {
    fields: [transactions.merchantId],
    references: [merchants.id],
  }),
  category: one(categories, {
    fields: [transactions.categoryId],
    references: [categories.id],
  }),
  lineItems: many(lineItems),
}));

export const lineItemsRelations = relations(lineItems, ({ one }) => ({
  transaction: one(transactions, {
    fields: [lineItems.transactionId],
    references: [transactions.id],
  }),
}));

export const holdingsRelations = relations(holdings, ({ one }) => ({
  account: one(accounts, {
    fields: [holdings.accountId],
    references: [accounts.id],
  }),
}));

export const liabilitiesRelations = relations(liabilities, ({ one }) => ({
  account: one(accounts, {
    fields: [liabilities.accountId],
    references: [accounts.id],
  }),
}));
