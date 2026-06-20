/**
 * Non-secret runtime configuration.
 *
 * Holds operational flags that are safe to read from the environment directly
 * because they are not secrets. Secret values are resolved through
 * ./secrets.ts only.
 */

export type DataMode = "filler" | "live";

/**
 * Resolve DATA_MODE. Defaults to "filler", the safe mode that uses seed data
 * and makes no external calls. Any unrecognized value falls back to "filler".
 */
export function getDataMode(): DataMode {
  const raw = (process.env.DATA_MODE ?? "filler").toLowerCase();
  return raw === "live" ? "live" : "filler";
}

/** True when the app should run entirely on seed data with no external calls. */
export function isFillerMode(): boolean {
  return getDataMode() === "filler";
}

/** The configured LLM model identifier, or null when the gateway is unconfigured. */
export function getLlmModel(): string | null {
  const model = process.env.LLM_MODEL?.trim();
  return model && model.length > 0 ? model : null;
}
