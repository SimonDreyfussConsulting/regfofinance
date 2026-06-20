/**
 * The model-agnostic gateway contract.
 *
 * All LLM access in Commonwealth Main flows through this interface. No vendor
 * SDK is imported anywhere outside /gateway. Swapping models is a config
 * change, not a code change. LLMs narrate only. They never produce a number
 * that is displayed in the UI.
 */

export interface CompletionMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface CompletionRequest {
  /** Optional system instruction. */
  system?: string;
  /** Conversation messages, oldest first. */
  messages: CompletionMessage[];
  /** Soft cap on output length. Advisory; adapters may clamp. */
  maxTokens?: number;
  /** Sampling temperature. Advisory. */
  temperature?: number;
}

export type CompletionStatus = "ok" | "not_configured" | "error";

export interface CompletionResult {
  status: CompletionStatus;
  /** Narrative text, or null when not produced. */
  text: string | null;
  /** The model that served the request, or null. */
  model: string | null;
  /** Human-readable explanation when status is not "ok". */
  reason?: string;
}

/**
 * A model adapter. Future phases implement one of these per provider, inside
 * /gateway only, and register it with the router. Phase 1 registers none.
 */
export interface ModelAdapter {
  /** The model identifier this adapter serves, matched against LLM_MODEL. */
  readonly id: string;
  complete(request: CompletionRequest): Promise<CompletionResult>;
}
