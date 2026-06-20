# Ops: scheduled jobs (placeholder)

Placeholder for Phase 1. Scheduled ingestion and refresh jobs are deferred to a
later phase.

Planned jobs:

- Periodic connector syncs once live connectors are wired. Every sync emits
  canonical records through /normalization and never writes to any account.
- Market, macro, and news refresh for the intelligence engine.
- Backup job (see backup.placeholder.md).

All jobs are read-only with respect to external accounts. No job moves money.
Nothing here is active in Phase 1.
