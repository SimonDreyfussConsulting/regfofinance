/**
 * Intelligence layer (Phase 1 stub).
 *
 * Home of the deterministic Policy Engine and the market, macro, and news
 * engine. Both are stubs in this phase. When implemented:
 *
 * - The Policy Engine produces deterministic proposals from ledger data and
 *   explicit rules. Every number it emits traces to a database query. It never
 *   asks an LLM for a figure.
 * - The market, macro, and news engine ingests external series into the
 *   reserved additive tables (macro_series, market_prices, news_items) and is
 *   read-only with respect to any account.
 *
 * Nothing here is active yet.
 */

export interface PolicyProposal {
  id: string;
  title: string;
  rationale: string;
}

const NOT_IMPLEMENTED =
  "Intelligence layer is a Phase 1 stub. The Policy Engine and the " +
  "market-macro-news engine are not implemented yet.";

/** Deterministic Policy Engine. Stub. */
export function runPolicyEngine(): Promise<PolicyProposal[]> {
  return Promise.reject(new Error(NOT_IMPLEMENTED));
}

/** Market, macro, and news refresh. Stub. */
export function refreshMarketMacroNews(): Promise<void> {
  return Promise.reject(new Error(NOT_IMPLEMENTED));
}
