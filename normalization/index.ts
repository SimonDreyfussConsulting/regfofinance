/**
 * The normalization layer.
 *
 * Maps a connector's raw dataset into canonical ledger records. This is the
 * only boundary where raw vendor shapes are allowed. Everything it returns is
 * canonical and safe for the rest of the system to consume.
 */

import type { RawDataset, RawTransaction } from "@ingestion/raw";
import {
  emptyBatch,
  type CanonicalBatch,
  type CanonicalLineItem,
  type CanonicalTransaction,
} from "./canonical";
import { allCanonicalMerchants, CATEGORY_TREE, matchMerchant } from "./rules";

export { CATEGORY_TREE, allCanonicalMerchants } from "./rules";

const UNCATEGORIZED = "Uncategorized";

/** Parse a loosely formatted amount string into a number. */
function parseAmount(raw: string): number {
  const cleaned = raw.replace(/[$,\s]/g, "");
  const value = Number(cleaned);
  if (!Number.isFinite(value)) {
    throw new Error(`Cannot normalize amount: "${raw}"`);
  }
  return value;
}

/** Parse a quantity or price string into a number. */
function parseNumber(raw: string): number {
  const value = Number(raw.replace(/[$,\s]/g, ""));
  if (!Number.isFinite(value)) {
    throw new Error(`Cannot normalize numeric value: "${raw}"`);
  }
  return value;
}

/**
 * Normalize a date into an ISO date (YYYY-MM-DD). Accepts ISO input and
 * US-style MM/DD/YYYY input.
 */
function parseDate(raw: string): string {
  const trimmed = raw.trim();
  if (/^\d{4}-\d{2}-\d{2}/.test(trimmed)) {
    return trimmed.slice(0, 10);
  }
  const us = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (us) {
    const [, month, day, year] = us;
    return `${year}-${month!.padStart(2, "0")}-${day!.padStart(2, "0")}`;
  }
  throw new Error(`Cannot normalize date: "${raw}"`);
}

/** Collapse whitespace and trim a raw description. */
function cleanDescription(raw: string): string {
  return raw.replace(/\s+/g, " ").trim();
}

/** Round to cents to keep currency math stable for display. */
function toCents(value: number): number {
  return Math.round(value * 100) / 100;
}

function normalizeTransaction(raw: RawTransaction): {
  transaction: CanonicalTransaction;
  lineItems: CanonicalLineItem[];
} {
  const description = cleanDescription(raw.description);
  const match = matchMerchant(description);

  const transaction: CanonicalTransaction = {
    externalId: raw.externalId,
    accountExternalId: raw.accountExternalId,
    postedDate: parseDate(raw.date),
    amount: toCents(parseAmount(raw.amount)),
    rawDescription: description,
    merchantName: match?.canonicalName ?? null,
    categoryName: match?.category ?? UNCATEGORIZED,
    sourceStrategy: "filler",
  };

  const lineItems: CanonicalLineItem[] = (raw.lineItems ?? []).map((item) => {
    const quantity = parseNumber(item.quantity);
    const unitPrice = parseNumber(item.unitPrice);
    return {
      transactionExternalId: raw.externalId,
      name: item.name.trim(),
      quantity,
      unitPrice: toCents(unitPrice),
      // Derived here in the normalization layer and persisted, never recomputed
      // in a UI component.
      lineTotal: toCents(quantity * unitPrice),
    };
  });

  return { transaction, lineItems };
}

/**
 * Normalize a raw dataset produced by a connector into canonical records.
 */
export function normalizeFillerDataset(raw: RawDataset): CanonicalBatch {
  const batch = emptyBatch();

  batch.merchants = allCanonicalMerchants();
  batch.categories = CATEGORY_TREE;

  batch.accounts = raw.accounts.map((account) => ({
    externalId: account.externalId,
    name: account.name,
    institution: account.institution,
    type: account.type,
    currency: account.currency,
    ingestionStrategy: account.ingestionStrategy,
    lastSynced: account.lastSynced,
  }));

  for (const rawTransaction of raw.transactions) {
    const { transaction, lineItems } = normalizeTransaction(rawTransaction);
    batch.transactions.push(transaction);
    batch.lineItems.push(...lineItems);
  }

  batch.holdings = raw.holdings.map((holding) => ({
    accountExternalId: holding.accountExternalId,
    symbol: holding.symbol.toUpperCase().trim(),
    quantity: parseNumber(holding.quantity),
    costBasis: toCents(parseNumber(holding.costBasis)),
    asOfDate: parseDate(holding.asOfDate),
  }));

  batch.liabilities = raw.liabilities.map((liability) => ({
    accountExternalId: liability.accountExternalId,
    principal: toCents(parseNumber(liability.principal)),
    rate: parseNumber(liability.rate),
    rateType: liability.rateType,
    minimumPayment: toCents(parseNumber(liability.minimumPayment)),
    payoffTerms: liability.payoffTerms.trim(),
  }));

  return batch;
}
