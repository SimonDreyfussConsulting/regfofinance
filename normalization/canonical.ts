/**
 * The canonical ledger contract.
 *
 * Every connector in /ingestion emits these records and nothing else. Raw
 * vendor shapes never escape the normalization boundary. The database schema
 * in /db is the persisted form of these same records, and the seed script
 * loads them through this contract so the full path is exercised.
 *
 * Natural keys (externalId, canonicalName, name) connect records to each other
 * before the database assigns its own identifiers. The insertion layer in
 * /db resolves these natural keys into database rows.
 */

export type AccountType =
  | "depository"
  | "credit"
  | "investment"
  | "loan"
  | "hsa"
  | "other";

export type RateType = "fixed" | "variable";

/**
 * How an account's data is, or will eventually be, ingested. In Phase 1 every
 * account is loaded by the filler connector regardless of this tag. The tag
 * records the intended Phase 2 source so the seam is visible now.
 */
export type IngestionStrategy =
  | "filler"
  | "plaid"
  | "simplefin"
  | "teller"
  | "mailbox"
  | "document"
  | "scraper"
  | "manual";

export interface CanonicalMerchant {
  /** Stable, human-readable canonical name. Acts as the natural key. */
  canonicalName: string;
  /** Alternate spellings seen in raw descriptions. */
  aliases: string[];
}

export interface CanonicalCategory {
  /** Unique category name. Acts as the natural key. */
  name: string;
  /** Parent category name for hierarchy, or null for a top-level category. */
  parentName: string | null;
}

export interface CanonicalAccount {
  /** Stable natural key supplied by the connector. */
  externalId: string;
  /** Display name, for example "Chase Checking". */
  name: string;
  /** Institution, for example "Chase". */
  institution: string;
  type: AccountType;
  /** ISO 4217 currency code, for example "USD". */
  currency: string;
  ingestionStrategy: IngestionStrategy;
  /** ISO timestamp of the last successful sync, or null if never synced. */
  lastSynced: string | null;
}

export interface CanonicalTransaction {
  /** Stable natural key supplied by the connector. */
  externalId: string;
  /** Natural key of the owning account. */
  accountExternalId: string;
  /** ISO date the transaction posted. */
  postedDate: string;
  /** Signed amount. Negative is money out, positive is money in. */
  amount: number;
  /** Description as seen in the source, after light cleaning. */
  rawDescription: string;
  /** Canonical merchant name, or null when no merchant applies. */
  merchantName: string | null;
  /** Category name, or null when uncategorized. */
  categoryName: string | null;
  /** The ingestion strategy that produced this record. */
  sourceStrategy: IngestionStrategy;
}

export interface CanonicalLineItem {
  /** Natural key of the owning transaction. */
  transactionExternalId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export interface CanonicalHolding {
  /** Natural key of the owning account. */
  accountExternalId: string;
  symbol: string;
  quantity: number;
  costBasis: number;
  /** ISO date the holding snapshot is valid for. */
  asOfDate: string;
}

export interface CanonicalLiability {
  /** Natural key of the owning account. */
  accountExternalId: string;
  principal: number;
  /** Annual interest rate as a percentage, for example 6.5 for 6.5 percent. */
  rate: number;
  rateType: RateType;
  minimumPayment: number;
  /** Free-text payoff terms, for example "30 year fixed". */
  payoffTerms: string;
}

/**
 * A complete batch of canonical records emitted by a connector. The seed
 * script and any future sync routine consume only this shape.
 */
export interface CanonicalBatch {
  merchants: CanonicalMerchant[];
  categories: CanonicalCategory[];
  accounts: CanonicalAccount[];
  transactions: CanonicalTransaction[];
  lineItems: CanonicalLineItem[];
  holdings: CanonicalHolding[];
  liabilities: CanonicalLiability[];
}

/** An empty batch, useful as a starting accumulator. */
export function emptyBatch(): CanonicalBatch {
  return {
    merchants: [],
    categories: [],
    accounts: [],
    transactions: [],
    lineItems: [],
    holdings: [],
    liabilities: [],
  };
}
