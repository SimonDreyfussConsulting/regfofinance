/**
 * Connector registry.
 *
 * Maps an ingestion strategy to its connector. In filler mode every strategy
 * resolves to the FillerConnector, so the app runs entirely on seed data and
 * makes no external calls. In live mode strategies resolve to their real
 * connectors, which are stubs in Phase 1 and throw a clear error.
 */

import { getDataMode } from "@ops/config";
import type { IngestionStrategy } from "@normalization/canonical";
import type { Connector } from "./types";
import { FillerConnector } from "./filler/connector";
import {
  DocumentConnector,
  MailboxConnector,
  ManualConnector,
  PlaidConnector,
  ScraperConnector,
  SimpleFinConnector,
  TellerConnector,
} from "./stubs";

function liveConnector(strategy: IngestionStrategy): Connector {
  switch (strategy) {
    case "filler":
      return new FillerConnector();
    case "plaid":
      return new PlaidConnector();
    case "simplefin":
      return new SimpleFinConnector();
    case "teller":
      return new TellerConnector();
    case "mailbox":
      return new MailboxConnector();
    case "document":
      return new DocumentConnector();
    case "scraper":
      return new ScraperConnector();
    case "manual":
      return new ManualConnector();
    default: {
      const exhaustive: never = strategy;
      throw new Error(`Unknown ingestion strategy: ${String(exhaustive)}`);
    }
  }
}

/**
 * Resolve the connector for a strategy under the current data mode. Filler mode
 * always returns the FillerConnector. This is the safe default.
 */
export function getConnector(strategy: IngestionStrategy): Connector {
  if (getDataMode() === "filler") {
    return new FillerConnector();
  }
  return liveConnector(strategy);
}

/**
 * The connector that supplies the full seed batch. Always the FillerConnector
 * in Phase 1, regardless of mode, since seeding never makes external calls.
 */
export function getSeedConnector(): Connector {
  return new FillerConnector();
}
