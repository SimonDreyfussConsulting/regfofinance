# CLAUDE.md

Guidance for every future Claude Code session in this repository. Read this first. Keep it accurate.

## Product identity

- Product name: Commonwealth Main. Legal and domain name: commonwealthmain.com. DBA: Commonwealth.
- Thesis: full financial services once reserved for the wealthy, now private and accessible to a normal household.
- Users: a two-adult household (Simon and Laurie in seed data). Single tenant. Not multi-user SaaS.
- This is decision support, not a licensed advisor. Read-only. No money movement anywhere in the system.

## Hard rules (never violate)

1. Read-only core. No transfers, no payments, no trade execution, no write credentials to any account. No money-movement code anywhere.
2. Deterministic numbers. Every figure shown in the UI comes from a database query. No number is computed or estimated in a component from a guess, and no LLM ever produces a displayed number. LLMs narrate only.
3. Model-agnostic gateway. All LLM calls route through one internal gateway module in `/gateway`. No vendor SDK is imported anywhere outside that gateway. Swapping models is a config change.
4. One canonical ledger. Every connector emits canonical ledger records and nothing else. No connector leaks its raw vendor shape past the normalization layer.
5. Secrets are never in code or committed. No real API keys, tokens, or credentials. Use `.env.example` with placeholder names only. Nothing reads secrets directly from `process.env` outside the secrets provider in `/ops`.
6. Human in the loop. Open a PR. Do not merge.

## Conventions

- No em dashes in any file, comment, doc, or commit message.
- No "POC" or "pilot" language. Work is organized into Phases and Tasks.
- Shell commands in docs are written as plain text labeled `[EC2]` or `[LOCAL]`, not inside code fences.
- Branch discipline: all work on a feature branch, delivered as a PR. Never push to main.

## Stack (locked)

- Next.js with the App Router. TypeScript everywhere, strict mode on.
- Tailwind CSS, shadcn/ui for components, Tremor for charts and dashboard primitives.
- PostgreSQL with Drizzle ORM and SQL-first migrations, so the schema reads as a real contract.
- Node scripts for seeding (run with tsx).
- Docker Compose runs Postgres locally with one command.

## Repository map (seams)

- `/web` the Next.js app (dashboard UI and API routes).
- `/db` Drizzle schema, SQL migrations, and seed scripts.
- `/ingestion` connectors: filler, plaid, simplefin, teller, mailbox, document, scraper, manual. Each emits canonical records only.
- `/normalization` maps connector raw output into canonical ledger records. The single owner of the canonical contract.
- `/gateway` the model-agnostic LLM router interface.
- `/intelligence` placeholder for the deterministic Policy Engine and the market-macro-news engine. Stub only in this phase.
- `/advisor` placeholder for the Persona Layer and conversational agent. Stub only in this phase.
- `/ops` provisioning notes, secrets interface, backup and cron placeholders.
- `/frontend` a separate, pre-existing marketing site. Not part of Commonwealth Main. Do not modify it as part of Commonwealth work.

## Data flow contract

1. A connector in `/ingestion` fetches source data and runs it through `/normalization`.
2. Normalization returns canonical ledger records. Raw vendor shapes never escape this boundary.
3. The seed script and the app consume canonical records only.
4. The database is the single source of truth for every displayed number.
5. The UI reads numbers through the data-access layer in `web/lib`, which issues SQL via Drizzle.

## DATA_MODE

- `DATA_MODE` defaults to `filler`. In filler mode the app uses `FillerConnector` and the seed data and makes no external calls.
- `live` mode is recognized but inert in this phase. Live connectors are stubs that throw a clear error.

## Canonical ledger schema (Phase 1 tables)

`accounts`, `transactions`, `line_items`, `merchants`, `categories`, `holdings`, `liabilities`.

Treat this schema as a contract that later phases extend only by additive migration. Reserved future tables, not created in this phase: `macro_series`, `market_prices`, `news_items`, `proposals`, `advisor_state`.

## How to run

See `README.md` for the exact sequence. Summary: bring up Postgres with Docker Compose, install, migrate, seed, run the dev server. Everything runs on seed data with no external calls.
