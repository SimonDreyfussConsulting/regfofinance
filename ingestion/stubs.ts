/**
 * Stub connectors.
 *
 * Each conforms to the single Connector interface and throws a clear
 * "not configured in filler mode" error. They mark the seams for later phases.
 * No vendor SDK is imported. No external call is made.
 */

import type { CanonicalBatch, IngestionStrategy } from "@normalization/canonical";
import { ConnectorNotConfiguredError, type Connector } from "./types";

class StubConnector implements Connector {
  readonly strategy: IngestionStrategy;
  readonly name: string;

  constructor(strategy: IngestionStrategy, name: string) {
    this.strategy = strategy;
    this.name = name;
  }

  async fetch(): Promise<CanonicalBatch> {
    throw new ConnectorNotConfiguredError(this.strategy);
  }
}

export class PlaidConnector extends StubConnector {
  constructor() {
    super("plaid", "Plaid (stub)");
  }
}

export class SimpleFinConnector extends StubConnector {
  constructor() {
    super("simplefin", "SimpleFIN (stub)");
  }
}

export class TellerConnector extends StubConnector {
  constructor() {
    super("teller", "Teller (stub)");
  }
}

export class MailboxConnector extends StubConnector {
  constructor() {
    super("mailbox", "Mailbox email (stub)");
  }
}

export class DocumentConnector extends StubConnector {
  constructor() {
    super("document", "Document upload (stub)");
  }
}

export class ScraperConnector extends StubConnector {
  constructor() {
    super("scraper", "Scraper (stub)");
  }
}

export class ManualConnector extends StubConnector {
  constructor() {
    super("manual", "Manual entry (stub)");
  }
}
