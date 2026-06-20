# Commonwealth Main

A private, self-hosted, read-only financial concierge for a single household.
Phase 1 is the scaffold. It runs entirely on seeded filler data with no real
credentials and no live external calls.

This repository also contains an unrelated, pre-existing marketing site under
`/frontend`. That site is not part of Commonwealth Main. See `CLAUDE.md` for the
full product brief, hard rules, and conventions.

## What Phase 1 includes

- The canonical ledger schema as SQL-first Drizzle migrations.
- A single connector interface. Only `FillerConnector` is active. Every other
  connector is a stub that throws a clear error.
- The normalization layer that maps raw source data into canonical records. The
  filler data flows through it, so the path is exercised.
- A model-agnostic LLM gateway with no vendor SDK imported. It returns a clear
  "gateway not configured" result in this phase.
- A secrets provider interface with a local env implementation and an AWS
  Secrets Manager implementation stubbed for production.
- Six months of deterministic seed data for the Simon and Laurie household.
- An installable, responsive drill-down dashboard: net worth, to category, to
  merchant, to transaction, to grocery line item.
- A `DATA_MODE` flag defaulting to `filler`, the safe mode.

## Requirements

- Node 20 or newer
- Docker and Docker Compose
- npm

## Run it

From a fresh clone, run these steps in order. Shell commands are listed as plain
text, labeled for where they run.

Copy the environment template.

[LOCAL] cp .env.example .env

Bring up Postgres.

[LOCAL] docker compose up -d

Install dependencies.

[LOCAL] npm install

Apply the database migrations.

[LOCAL] npm run db:migrate

Seed the filler data.

[LOCAL] npm run db:seed

Start the development server.

[LOCAL] npm run dev

Then open http://localhost:3000. The app loads on filler data and makes no
external calls.

## Drill-down path

From the net worth view, click a spending category, then a merchant within it,
then a transaction, then view the grocery receipt line items. The layout works
at phone and desktop widths. Every figure on screen is the result of a SQL
query in `web/lib/queries.ts`.

## Useful scripts

- npm run dev: start the Next.js app from `/web`.
- npm run build: production build.
- npm run db:generate: regenerate SQL migrations from the Drizzle schema.
- npm run db:migrate: apply migrations.
- npm run db:seed: reseed filler data. Idempotent.
- npm run db:studio: open Drizzle Studio.
- npm run typecheck: type-check the modules and the web app.
- npm run lint: lint the web app.
- npm run format: format with Prettier.

## Repository map

- `/web` the Next.js app (dashboard UI and API routes).
- `/db` Drizzle schema, SQL migrations, and seed scripts.
- `/ingestion` connectors. Each emits canonical records only.
- `/normalization` maps connector output into canonical ledger records.
- `/gateway` the model-agnostic LLM router.
- `/intelligence` Policy Engine and market-macro-news engine. Stub in Phase 1.
- `/advisor` Persona Layer and conversational agent. Stub in Phase 1.
- `/ops` provisioning notes, secrets interface, backup and cron placeholders.

## Safety posture

- Read-only. No transfers, no payments, no trade execution, no write
  credentials. No money-movement code anywhere.
- Every displayed number traces to a SQL query. LLMs narrate only.
- No vendor LLM SDK is imported outside `/gateway`.
- No secret values are committed. Only `.env.example` placeholders exist.
- Default `DATA_MODE` is `filler`, so the app is safe out of the box.
