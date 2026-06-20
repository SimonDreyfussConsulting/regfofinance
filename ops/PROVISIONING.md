# Ops: provisioning notes

Operational notes for running Commonwealth Main. Shell commands are plain text
labeled `[EC2]` or `[LOCAL]`, not in code fences, per repository convention.

## Local development

Bring up Postgres locally with Docker Compose.

[LOCAL] docker compose up -d

Install dependencies, migrate, seed, and run the dev server.

[LOCAL] npm install
[LOCAL] npm run db:migrate
[LOCAL] npm run db:seed
[LOCAL] npm run dev

The app runs in filler mode by default and makes no external calls.

## Secrets

All secret access goes through `ops/secrets.ts`. Nothing else reads secrets
from the environment. Local development uses the env provider backed by a local
`.env` file that is never committed. Production will use the AWS Secrets Manager
provider, which is stubbed in Phase 1.

Select the provider with `SECRETS_PROVIDER`.

- env: read from process.env (local).
- aws: read from AWS Secrets Manager (production, stubbed).

## Production target (deferred)

Production runs on a single EC2 host with managed Postgres. The exact
provisioning steps are deferred to a later phase. Sketch only.

[EC2] sudo dnf install -y docker
[EC2] sudo systemctl enable --now docker

Database credentials and the LLM API key are resolved at runtime through the
AWS Secrets Manager provider once it is implemented. No secret values are ever
written to disk in the repository.

## Backups and cron

See `backup.placeholder.md` and `cron.placeholder.md`. Both are placeholders in
Phase 1.
