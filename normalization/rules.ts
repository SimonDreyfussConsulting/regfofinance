/**
 * Normalization knowledge: the category hierarchy and the merchant dictionary.
 *
 * This is the only place that knows how raw descriptions map to canonical
 * merchants and categories. Connectors do not carry this knowledge.
 */

import type { CanonicalCategory, CanonicalMerchant } from "./canonical";

/**
 * The canonical category hierarchy. Top-level categories have a null parent.
 * Children name their parent. Names are unique and act as natural keys.
 */
export const CATEGORY_TREE: CanonicalCategory[] = [
  { name: "Income", parentName: null },
  { name: "Salary", parentName: "Income" },

  { name: "Housing", parentName: null },
  { name: "Mortgage", parentName: "Housing" },

  { name: "Food", parentName: null },
  { name: "Groceries", parentName: "Food" },
  { name: "Dining", parentName: "Food" },

  { name: "Childcare", parentName: null },
  { name: "Daycare", parentName: "Childcare" },

  { name: "Utilities", parentName: null },

  { name: "Transportation", parentName: null },
  { name: "Gas", parentName: "Transportation" },

  { name: "Health", parentName: null },
  { name: "Medical", parentName: "Health" },

  { name: "Shopping", parentName: null },
  { name: "Online Shopping", parentName: "Shopping" },

  { name: "Subscriptions", parentName: null },

  { name: "Transfers", parentName: null },

  { name: "Uncategorized", parentName: null },
];

export interface MerchantRule {
  canonicalName: string;
  /** Default category for transactions matched to this merchant. */
  defaultCategory: string;
  /** Uppercase fragments that appear in raw descriptions. */
  aliases: string[];
}

/**
 * The merchant dictionary. Matching is done by testing whether any alias is a
 * substring of the uppercased raw description. Longer aliases are tried first
 * so that more specific names win.
 */
export const MERCHANT_RULES: MerchantRule[] = [
  // Groceries
  {
    canonicalName: "Whole Foods Market",
    defaultCategory: "Groceries",
    aliases: ["WHOLEFDS", "WHOLE FOODS MARKET", "WHOLE FOODS"],
  },
  {
    canonicalName: "Trader Joe's",
    defaultCategory: "Groceries",
    aliases: ["TRADER JOES", "TRADER JOE"],
  },
  { canonicalName: "Safeway", defaultCategory: "Groceries", aliases: ["SAFEWAY"] },
  {
    canonicalName: "Costco Wholesale",
    defaultCategory: "Groceries",
    aliases: ["COSTCO WHSE", "COSTCO"],
  },
  {
    canonicalName: "Instacart",
    defaultCategory: "Groceries",
    aliases: ["INSTACART", "INSTACRT"],
  },
  // Online shopping
  {
    canonicalName: "Amazon",
    defaultCategory: "Online Shopping",
    aliases: ["AMZN MKTP", "AMAZON.COM", "AMAZON", "AMZN"],
  },
  // Dining
  { canonicalName: "Chipotle", defaultCategory: "Dining", aliases: ["CHIPOTLE"] },
  {
    canonicalName: "Starbucks",
    defaultCategory: "Dining",
    aliases: ["STARBUCKS", "SBUX"],
  },
  {
    canonicalName: "DoorDash",
    defaultCategory: "Dining",
    aliases: ["DOORDASH", "DD DOORDASH"],
  },
  // Gas
  { canonicalName: "Chevron", defaultCategory: "Gas", aliases: ["CHEVRON"] },
  { canonicalName: "Shell", defaultCategory: "Gas", aliases: ["SHELL OIL", "SHELL"] },
  // Utilities
  {
    canonicalName: "Pacific Gas and Electric",
    defaultCategory: "Utilities",
    aliases: ["PG&E", "PGANDE", "PACIFIC GAS"],
  },
  {
    canonicalName: "Comcast Xfinity",
    defaultCategory: "Utilities",
    aliases: ["COMCAST", "XFINITY"],
  },
  {
    canonicalName: "Verizon Wireless",
    defaultCategory: "Utilities",
    aliases: ["VERIZON", "VZWRLSS"],
  },
  // Childcare
  {
    canonicalName: "Procare Daycare",
    defaultCategory: "Daycare",
    aliases: ["PROCARE"],
  },
  // Mortgage
  {
    canonicalName: "Rocket Mortgage",
    defaultCategory: "Mortgage",
    aliases: ["ROCKET MORTGAGE", "ROCKET MTG"],
  },
  // Medical
  {
    canonicalName: "HealthEquity",
    defaultCategory: "Medical",
    aliases: ["HEALTHEQUITY", "HEALTH EQUITY"],
  },
  {
    canonicalName: "Kaiser Permanente",
    defaultCategory: "Medical",
    aliases: ["KAISER PERMANENTE", "KAISER"],
  },
  {
    canonicalName: "CVS Pharmacy",
    defaultCategory: "Medical",
    aliases: ["CVS PHARMACY", "CVS"],
  },
  // Subscriptions
  { canonicalName: "Netflix", defaultCategory: "Subscriptions", aliases: ["NETFLIX"] },
  { canonicalName: "Spotify", defaultCategory: "Subscriptions", aliases: ["SPOTIFY"] },
  {
    canonicalName: "Disney Plus",
    defaultCategory: "Subscriptions",
    aliases: ["DISNEYPLUS", "DISNEY PLUS"],
  },
  // Income
  {
    canonicalName: "Northstar Labs Payroll",
    defaultCategory: "Salary",
    aliases: ["NORTHSTAR LABS", "NORTHSTAR PAYROLL", "DIRECT DEP NORTHSTAR"],
  },
  {
    canonicalName: "Meridian Health Payroll",
    defaultCategory: "Salary",
    aliases: ["MERIDIAN HEALTH", "MERIDIAN PAYROLL", "DIRECT DEP MERIDIAN"],
  },
  // Transfers
  {
    canonicalName: "Internal Transfer",
    defaultCategory: "Transfers",
    aliases: ["ONLINE TRANSFER", "XFER", "TRANSFER TO", "TRANSFER FROM"],
  },
];

/**
 * The full set of canonical merchants the dictionary can produce. Emitting all
 * of them keeps referential integrity even for merchants not present in a given
 * batch, and gives the merchants table its alias data.
 */
export function allCanonicalMerchants(): CanonicalMerchant[] {
  return MERCHANT_RULES.map((rule) => ({
    canonicalName: rule.canonicalName,
    aliases: rule.aliases,
  }));
}

/** Merchant rules sorted so the longest alias is tested first. */
const RULES_BY_ALIAS_SPECIFICITY = MERCHANT_RULES.flatMap((rule) =>
  rule.aliases.map((alias) => ({ alias: alias.toUpperCase(), rule })),
).sort((a, b) => b.alias.length - a.alias.length);

export interface MerchantMatch {
  canonicalName: string;
  category: string;
}

/**
 * Resolve a raw description to a canonical merchant and category. Returns null
 * when nothing matches, leaving categorization to the caller's fallback.
 */
export function matchMerchant(rawDescription: string): MerchantMatch | null {
  const haystack = rawDescription.toUpperCase();
  for (const { alias, rule } of RULES_BY_ALIAS_SPECIFICITY) {
    if (haystack.includes(alias)) {
      return { canonicalName: rule.canonicalName, category: rule.defaultCategory };
    }
  }
  return null;
}
