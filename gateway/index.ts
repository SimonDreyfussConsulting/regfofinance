/**
 * The LLM gateway router.
 *
 * One entry point, complete(), routes to a configured model adapter. Adapters
 * are registered here and only here. No vendor SDK is imported in this file or
 * anywhere outside /gateway. If no model is configured, or the configured model
 * has no registered adapter, complete() returns a clear, non-throwing result.
 *
 * Phase 1 registers no adapters, so the gateway is intentionally inert.
 */

import { getLlmModel } from "@ops/config";
import type { CompletionRequest, CompletionResult, ModelAdapter } from "./types";

export type {
  CompletionMessage,
  CompletionRequest,
  CompletionResult,
  CompletionStatus,
  ModelAdapter,
} from "./types";

const adapters = new Map<string, ModelAdapter>();

/**
 * Register a model adapter. Called only from within /gateway by future
 * provider modules. Re-registering an id replaces the previous adapter.
 */
export function registerAdapter(adapter: ModelAdapter): void {
  adapters.set(adapter.id, adapter);
}

/** List the currently registered model ids. Useful for diagnostics. */
export function registeredModels(): string[] {
  return [...adapters.keys()];
}

/**
 * Route a completion request to the configured model. Never throws for
 * configuration problems; it returns a result describing the situation.
 */
export async function complete(request: CompletionRequest): Promise<CompletionResult> {
  const model = getLlmModel();

  if (!model) {
    return {
      status: "not_configured",
      text: null,
      model: null,
      reason:
        "gateway not configured: set LLM_MODEL and register a matching adapter in /gateway.",
    };
  }

  const adapter = adapters.get(model);
  if (!adapter) {
    return {
      status: "not_configured",
      text: null,
      model,
      reason: `gateway not configured: no adapter registered for model "${model}".`,
    };
  }

  try {
    return await adapter.complete(request);
  } catch (error) {
    return {
      status: "error",
      text: null,
      model,
      reason: error instanceof Error ? error.message : "unknown gateway error",
    };
  }
}
