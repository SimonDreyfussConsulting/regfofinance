/**
 * Raw, pre-normalized shapes.
 *
 * These represent source data as a connector first sees it, before the
 * normalization layer cleans and maps it into the canonical ledger. Raw
 * shapes are intentionally messy: amounts are strings, dates are loosely
 * formatted, descriptions are unprocessed, and no merchant or category has
 * been resolved yet. Raw shapes never leave a connector. They are passed to
 * /normalization, which returns canonical records.
 */

import type { AccountType, IngestionStrategy, RateType } from "@normalization/canonical";

export interface RawAccount {
  externalId: string;
  name: string;
  institution: string;
  type: AccountType;
  currency: string;
  ingestionStrategy: IngestionStrategy;
  lastSynced: string | null;
}

export interface RawLineItem {
  name: string;
  /** Quantity as a string, as a receipt line would present it. */
  quantity: string;
  /** Unit price as a string, for example "3.49". */
  unitPrice: string;
}

export interface RawTransaction {
  externalId: string;
  accountExternalId: string;
  /** Loosely formatted date, normalized downstream. */
  date: string;
  /** Signed amount as a string, normalized downstream. */
  amount: string;
  /** Unprocessed description as seen at the source. */
  description: string;
  /** Receipt detail, present only for itemized transactions. */
  lineItems?: RawLineItem[];
}

export interface RawHolding {
  accountExternalId: string;
  symbol: string;
  quantity: string;
  costBasis: string;
  asOfDate: string;
}

export interface RawLiability {
  accountExternalId: string;
  principal: string;
  /** Rate as a string, for example "6.5". */
  rate: string;
  rateType: RateType;
  minimumPayment: string;
  payoffTerms: string;
}

/**
 * The complete raw payload a connector assembles before normalization.
 */
export interface RawDataset {
  accounts: RawAccount[];
  transactions: RawTransaction[];
  holdings: RawHolding[];
  liabilities: RawLiability[];
}
