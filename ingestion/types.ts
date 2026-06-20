/**
 * The single connector contract.
 *
 * Every data source in Commonwealth Main implements this interface and emits
 * canonical ledger records and nothing else. A connector may hold raw vendor
 * shapes internally, but it must pass them through /normalization before
 * returning, so a connector's public output is always canonical.
 *
 * In Phase 1 only FillerConnector is active. Every other connector is a stub
 * that throws a clear error until it is wired in a later phase.
 */

import type { CanonicalBatch, IngestionStrategy } from "@normalization/canonical";

export interface Connector {
  /** The ingestion strategy this connector implements. */
  readonly strategy: IngestionStrategy;
  /** Human-readable connector name, for logs and diagnostics. */
  readonly name: string;
  /**
   * Fetch source data and return canonical records. Implementations must run
   * any raw source data through /normalization before returning.
   */
  fetch(): Promise<CanonicalBatch>;
}

/** Thrown by stub connectors that are not active in the current data mode. */
export class ConnectorNotConfiguredError extends Error {
  constructor(strategy: IngestionStrategy) {
    super(
      `Connector "${strategy}" is not configured in filler mode. ` +
        `Phase 1 runs entirely on FillerConnector and seed data. ` +
        `Real wiring for "${strategy}" is deferred to a later phase.`,
    );
    this.name = "ConnectorNotConfiguredError";
  }
}
