# Ops: backups (placeholder)

Placeholder for Phase 1. Database backup strategy is deferred to a later phase.

Planned shape:

- Nightly logical dump of the Postgres database to encrypted object storage.
- Retention policy with periodic restore drills.
- No real credentials in this repository. Backup target credentials resolve
  through the secrets provider in `ops/secrets.ts`.

Reference command for a manual local dump, plain text per convention:

[LOCAL] docker exec commonwealth-postgres pg_dump -U commonwealth commonwealth > backup.sql
