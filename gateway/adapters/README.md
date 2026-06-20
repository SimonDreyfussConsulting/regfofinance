# Gateway adapters

Model adapters live here, and only here. Each adapter implements the
`ModelAdapter` interface from `../types.ts` and registers itself with the
router via `registerAdapter`. A vendor SDK, if any, is imported only inside its
adapter file in this directory. Nothing outside `/gateway` imports a model SDK.

Phase 1 ships no adapters, so the gateway returns a "gateway not configured"
result. Adding a provider in a later phase is a config change plus one adapter
file here.
