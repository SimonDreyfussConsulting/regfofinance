/**
 * Advisor layer (Phase 1 stub).
 *
 * Home of the Persona Layer and the conversational agent. Stub in this phase.
 * When implemented, the advisor narrates over deterministic figures. It routes
 * every LLM call through /gateway and never produces a displayed number. The
 * numbers come from the database and the intelligence layer; the advisor only
 * explains them in plain language. Advisor state will persist in the reserved
 * additive table advisor_state.
 *
 * Nothing here is active yet.
 */

const NOT_IMPLEMENTED =
  "Advisor layer is a Phase 1 stub. The Persona Layer and conversational " +
  "agent are not implemented yet.";

export interface AdvisorReply {
  text: string;
}

/** Conversational advisor turn. Stub. */
export function advise(): Promise<AdvisorReply> {
  return Promise.reject(new Error(NOT_IMPLEMENTED));
}
