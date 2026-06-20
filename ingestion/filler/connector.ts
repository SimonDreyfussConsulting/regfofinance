/**
 * FillerConnector.
 *
 * The only active connector in Phase 1. It loads the deterministic filler
 * dataset and runs it through the normalization layer, returning canonical
 * records. Raw shapes never leave this connector. It makes no external calls.
 */

import { normalizeFillerDataset } from "@normalization/index";
import type { CanonicalBatch } from "@normalization/canonical";
import type { Connector } from "@ingestion/types";
import { fillerDataset } from "./dataset";

export class FillerConnector implements Connector {
  readonly strategy = "filler" as const;
  readonly name = "Filler (seed data)";

  async fetch(): Promise<CanonicalBatch> {
    // Load raw seed data, then normalize. The path mirrors what a real
    // connector will do: fetch raw, normalize, emit canonical.
    return normalizeFillerDataset(fillerDataset);
  }
}
