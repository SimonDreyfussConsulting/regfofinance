/**
 * Ingestion layer public surface.
 *
 * Every connector implements the single Connector interface and emits
 * canonical records only. In Phase 1 only FillerConnector is active.
 */

export type { Connector } from "./types";
export { ConnectorNotConfiguredError } from "./types";
export { FillerConnector } from "./filler/connector";
export { getConnector, getSeedConnector } from "./registry";
export type {
  RawAccount,
  RawDataset,
  RawHolding,
  RawLineItem,
  RawLiability,
  RawTransaction,
} from "./raw";
