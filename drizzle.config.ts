import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Build tooling configuration for Drizzle Kit. This file is used by the
// drizzle-kit CLI (generate, studio) and is not application runtime code.
// Application runtime resolves the database URL through the secrets provider
// in /ops. Tooling reads the connection string from the environment directly.
const databaseUrl =
  process.env.DATABASE_URL ??
  "postgresql://commonwealth:commonwealth@localhost:5432/commonwealth";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dbCredentials: { url: databaseUrl },
  strict: true,
  verbose: true,
});
