/**
 * Database client.
 *
 * Resolves the connection string through the secrets provider in /ops so no
 * other module reads DATABASE_URL from the environment directly. The app uses
 * the cached singleton getDb(). Short-lived scripts use createDb() and close()
 * so the process can exit cleanly.
 */

// Load the root .env. The working directory is the repository root for both
// the web server (next start/dev) and the node scripts, so the default lookup
// resolves the single shared .env file.
import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { requireSecret } from "@ops/secrets";
import * as schema from "./schema";

export type Schema = typeof schema;
export type Db = ReturnType<typeof drizzle<Schema>>;

export async function resolveDatabaseUrl(): Promise<string> {
  return requireSecret("DATABASE_URL");
}

export interface DbHandle {
  db: Db;
  /** Closes the underlying connection pool. */
  close: () => Promise<void>;
}

/** Create a dedicated client. Callers are responsible for close(). */
export async function createDb(max = 5): Promise<DbHandle> {
  const url = await resolveDatabaseUrl();
  const client = postgres(url, { max });
  const db = drizzle(client, { schema });
  return { db, close: () => client.end() };
}

let cached: Promise<Db> | null = null;

/** Cached client for the running application. */
export async function getDb(): Promise<Db> {
  if (!cached) {
    cached = (async () => {
      const url = await resolveDatabaseUrl();
      const client = postgres(url, { max: 10 });
      return drizzle(client, { schema });
    })();
  }
  return cached;
}
