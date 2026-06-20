/**
 * Secrets provider interface.
 *
 * This is the only module permitted to read secret values from the
 * environment. Nothing else in the codebase touches process.env for secrets.
 * Two implementations are provided: a local env provider for development and an
 * AWS Secrets Manager provider stubbed for production. No real values live
 * here, ever.
 */

export interface SecretsProvider {
  readonly name: string;
  /** Resolve a secret by logical name, or undefined if not set. */
  getSecret(name: string): Promise<string | undefined>;
}

/**
 * Local development provider. Reads from process.env. Values come from a local
 * .env file that is never committed.
 */
class EnvSecretsProvider implements SecretsProvider {
  readonly name = "env";
  async getSecret(name: string): Promise<string | undefined> {
    const value = process.env[name];
    return value && value.length > 0 ? value : undefined;
  }
}

/**
 * Production provider, stubbed for Phase 1. The real implementation will fetch
 * from AWS Secrets Manager using AWS_REGION and AWS_SECRETS_PREFIX. No vendor
 * SDK is wired yet, so this throws a clear error if selected.
 */
class AwsSecretsManagerProvider implements SecretsProvider {
  readonly name = "aws";
  async getSecret(_name: string): Promise<string | undefined> {
    throw new Error(
      "AWS Secrets Manager provider is not implemented in Phase 1. " +
        "Set SECRETS_PROVIDER=env for local development.",
    );
  }
}

let cached: SecretsProvider | null = null;

/** Select the secrets provider based on SECRETS_PROVIDER (defaults to env). */
export function getSecretsProvider(): SecretsProvider {
  if (cached) return cached;
  const selector = (process.env.SECRETS_PROVIDER ?? "env").toLowerCase();
  switch (selector) {
    case "aws":
      cached = new AwsSecretsManagerProvider();
      break;
    case "env":
    default:
      cached = new EnvSecretsProvider();
      break;
  }
  return cached;
}

/** Convenience accessor for a single secret. */
export async function getSecret(name: string): Promise<string | undefined> {
  return getSecretsProvider().getSecret(name);
}

/** Resolve a required secret, throwing a clear error when it is missing. */
export async function requireSecret(name: string): Promise<string> {
  const value = await getSecret(name);
  if (!value) {
    throw new Error(
      `Required secret "${name}" is not set. Add it to your local .env ` +
        `(see .env.example) or your configured secrets provider.`,
    );
  }
  return value;
}
