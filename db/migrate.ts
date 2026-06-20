/**
 * Applies SQL migrations from db/migrations to the configured database.
 * Run with: npm run db:migrate
 */

import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { resolveDatabaseUrl } from "./client";

async function main(): Promise<void> {
  const url = await resolveDatabaseUrl();
  const client = postgres(url, { max: 1 });
  const db = drizzle(client);
  console.log("Applying migrations from ./db/migrations ...");
  await migrate(db, { migrationsFolder: "./db/migrations" });
  await client.end();
  console.log("Migrations applied.");
}

main().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
