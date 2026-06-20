/**
 * Deterministic filler dataset.
 *
 * Builds a realistic six-month financial picture for the Simon and Laurie
 * household as raw, pre-normalized records. A seeded pseudo-random generator
 * makes the output identical on every run, so seeded numbers are reproducible.
 * Nothing here is real. No real institution, account, or person is represented.
 *
 * Descriptions are intentionally messy and bank-statement shaped so the
 * normalization layer has real work to do when it resolves merchants and
 * categories.
 */

import type {
  RawAccount,
  RawDataset,
  RawHolding,
  RawLineItem,
  RawLiability,
  RawTransaction,
} from "@ingestion/raw";

// ---------------------------------------------------------------------------
// Seeded pseudo-random generator (mulberry32). Deterministic by design.
// ---------------------------------------------------------------------------

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(0x5eed1234);

function rand(min: number, max: number): number {
  return min + rng() * (max - min);
}

function randInt(min: number, max: number): number {
  return Math.floor(rand(min, max + 1));
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(rng() * items.length)]!;
}

function money(value: number): string {
  return value.toFixed(2);
}

/** US-style date string to exercise date normalization. */
function usDate(d: Date): string {
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

/** ISO date string, mixed in to prove both formats normalize. */
function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// ---------------------------------------------------------------------------
// Accounts
// ---------------------------------------------------------------------------

const LAST_SYNCED = "2026-06-15T08:00:00.000Z";
const AS_OF = "2026-06-15";

const accounts: RawAccount[] = [
  {
    externalId: "chase-checking",
    name: "Chase Checking",
    institution: "Chase",
    type: "depository",
    currency: "USD",
    ingestionStrategy: "plaid",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "chase-savings",
    name: "Chase Savings",
    institution: "Chase",
    type: "depository",
    currency: "USD",
    ingestionStrategy: "plaid",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "amex-everyday",
    name: "Amex EveryDay",
    institution: "American Express",
    type: "credit",
    currency: "USD",
    ingestionStrategy: "plaid",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "chase-sapphire",
    name: "Chase Sapphire",
    institution: "Chase",
    type: "credit",
    currency: "USD",
    ingestionStrategy: "plaid",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "fidelity-brokerage",
    name: "Fidelity Brokerage",
    institution: "Fidelity",
    type: "investment",
    currency: "USD",
    ingestionStrategy: "plaid",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "fidelity-401k",
    name: "Fidelity 401k",
    institution: "Fidelity",
    type: "investment",
    // Eventual primary is Plaid with a document fallback. Tagged document to
    // make the document strategy visible in the seam.
    ingestionStrategy: "document",
    currency: "USD",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "healthequity-hsa",
    name: "HealthEquity HSA",
    institution: "HealthEquity",
    type: "hsa",
    currency: "USD",
    ingestionStrategy: "document",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "rocket-mortgage",
    name: "Rocket Mortgage",
    institution: "Rocket Mortgage",
    type: "loan",
    currency: "USD",
    ingestionStrategy: "document",
    lastSynced: LAST_SYNCED,
  },
  {
    externalId: "primary-residence",
    name: "Primary Residence",
    institution: "Manual Entry",
    type: "other",
    currency: "USD",
    ingestionStrategy: "manual",
    lastSynced: LAST_SYNCED,
  },
];

// ---------------------------------------------------------------------------
// Holdings and liabilities
// ---------------------------------------------------------------------------

const holdings: RawHolding[] = [
  // Brokerage
  { accountExternalId: "fidelity-brokerage", symbol: "VOO", quantity: "85.0000", costBasis: "38500.00", asOfDate: AS_OF },
  { accountExternalId: "fidelity-brokerage", symbol: "VXUS", quantity: "120.0000", costBasis: "7200.00", asOfDate: AS_OF },
  { accountExternalId: "fidelity-brokerage", symbol: "AAPL", quantity: "40.0000", costBasis: "6800.00", asOfDate: AS_OF },
  { accountExternalId: "fidelity-brokerage", symbol: "MSFT", quantity: "18.0000", costBasis: "5600.00", asOfDate: AS_OF },
  // 401k
  { accountExternalId: "fidelity-401k", symbol: "FXAIX", quantity: "520.0000", costBasis: "112000.00", asOfDate: AS_OF },
  { accountExternalId: "fidelity-401k", symbol: "FSPSX", quantity: "300.0000", costBasis: "14500.00", asOfDate: AS_OF },
  { accountExternalId: "fidelity-401k", symbol: "FXNAX", quantity: "640.0000", costBasis: "6600.00", asOfDate: AS_OF },
];

const liabilities: RawLiability[] = [
  {
    accountExternalId: "rocket-mortgage",
    principal: "415000.00",
    rate: "6.125",
    rateType: "fixed",
    minimumPayment: "2650.00",
    payoffTerms: "30 year fixed",
  },
];

// ---------------------------------------------------------------------------
// Transaction generation
// ---------------------------------------------------------------------------

const transactions: RawTransaction[] = [];
let txnSeq = 0;

function nextId(prefix: string): string {
  txnSeq += 1;
  return `${prefix}-${String(txnSeq).padStart(5, "0")}`;
}

// Running balances for the credit cards, so payments can clear the prior
// statement and leave a realistic revolving balance owed (never overpaid).
const cardBalance: Record<string, number> = {
  "amex-everyday": 0,
  "chase-sapphire": 0,
};

function addTxn(t: Omit<RawTransaction, "externalId"> & { externalId?: string }): void {
  transactions.push({ externalId: t.externalId ?? nextId("txn"), ...t });
  if (t.accountExternalId in cardBalance) {
    cardBalance[t.accountExternalId]! += Number(t.amount);
  }
}

// Grocery line-item catalogs, per store, used to populate receipt detail.
const GROCERY_ITEMS: Record<string, ReadonlyArray<{ name: string; price: number }>> = {
  "WHOLEFDS MKT": [
    { name: "Organic Bananas", price: 1.99 },
    { name: "365 Whole Milk Gallon", price: 4.49 },
    { name: "Free Range Eggs Dozen", price: 5.99 },
    { name: "Sourdough Bread", price: 4.29 },
    { name: "Atlantic Salmon Fillet", price: 12.99 },
    { name: "Baby Spinach 16oz", price: 3.99 },
    { name: "Avocado Each", price: 2.49 },
    { name: "Greek Yogurt 32oz", price: 6.49 },
  ],
  "TRADER JOES": [
    { name: "Mandarin Orange Chicken", price: 5.49 },
    { name: "Everything Bagels", price: 1.99 },
    { name: "Cold Brew Concentrate", price: 5.99 },
    { name: "Frozen Brown Rice", price: 3.29 },
    { name: "Dark Chocolate PB Cups", price: 4.49 },
    { name: "Cauliflower Gnocchi", price: 2.99 },
  ],
  "SAFEWAY": [
    { name: "Ground Beef 1lb", price: 6.99 },
    { name: "Russet Potatoes 5lb", price: 4.99 },
    { name: "Cheddar Cheese Block", price: 5.49 },
    { name: "Pasta Sauce Jar", price: 3.29 },
    { name: "Paper Towels 6pk", price: 8.99 },
    { name: "Orange Juice 52oz", price: 4.79 },
  ],
  "COSTCO WHSE": [
    { name: "Rotisserie Chicken", price: 4.99 },
    { name: "Kirkland Olive Oil 2L", price: 18.99 },
    { name: "Organic Eggs 24ct", price: 7.99 },
    { name: "Paper Towels 12pk", price: 21.99 },
    { name: "Mixed Nuts 2.5lb", price: 16.99 },
    { name: "Salmon 3lb", price: 32.99 },
  ],
  "INSTACART": [
    { name: "Bananas Bunch", price: 2.19 },
    { name: "Whole Milk Gallon", price: 4.59 },
    { name: "Chicken Breast 2lb", price: 11.49 },
    { name: "Broccoli Crowns", price: 3.49 },
    { name: "Service Fee", price: 7.99 },
    { name: "Sparkling Water 12pk", price: 5.99 },
  ],
};

const GROCERY_STORES = Object.keys(GROCERY_ITEMS);

function makeGroceryLineItems(storeKey: string): { items: RawLineItem[]; total: number } {
  const catalog = GROCERY_ITEMS[storeKey]!;
  const count = randInt(3, 6);
  const items: RawLineItem[] = [];
  let total = 0;
  for (let i = 0; i < count; i += 1) {
    const product = pick(catalog);
    const qty = randInt(1, 3);
    items.push({
      name: product.name,
      quantity: String(qty),
      unitPrice: money(product.price),
    });
    total += qty * product.price;
  }
  return { items, total: Math.round(total * 100) / 100 };
}

const DINING = [
  { desc: "CHIPOTLE 1432 SEATTLE WA", min: 11, max: 28 },
  { desc: "STARBUCKS STORE 7781", min: 4, max: 16 },
  { desc: "DD DOORDASH THAI BASIL", min: 22, max: 55 },
];
const GAS = [
  { desc: "CHEVRON 0099281 BELLEVUE", min: 38, max: 78 },
  { desc: "SHELL OIL 574412290", min: 35, max: 72 },
];
const MEDICAL = [
  { desc: "KAISER PERMANENTE COPAY", min: 25, max: 60 },
  { desc: "CVS PHARMACY #4471", min: 8, max: 45 },
];

// Generate from December 2025 through mid June 2026 (about six months).
const MONTHS = [
  new Date(2025, 11, 1),
  new Date(2026, 0, 1),
  new Date(2026, 1, 1),
  new Date(2026, 2, 1),
  new Date(2026, 3, 1),
  new Date(2026, 4, 1),
  new Date(2026, 5, 1),
];

// One-time manual home valuation so net worth reflects home equity.
addTxn({
  accountExternalId: "primary-residence",
  date: "2025-12-01",
  amount: money(650000),
  description: "MANUAL HOME VALUATION ESTIMATE",
});

for (const monthStart of MONTHS) {
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  // Stop generating partial activity past mid June 2026.
  const isFinalMonth = year === 2026 && month === 5;

  // Snapshot card balances carried into this month, before this month's
  // charges. Payments later in the month clear this prior statement balance.
  const amexStatement = cardBalance["amex-everyday"]!;
  const sapphireStatement = cardBalance["chase-sapphire"]!;

  // --- Income: two semi-monthly direct deposits ---
  for (const day of [1, 15]) {
    if (isFinalMonth && day === 15) continue;
    const d = new Date(year, month, day);
    addTxn({
      accountExternalId: "chase-checking",
      date: usDate(d),
      amount: money(4200),
      description: "NORTHSTAR LABS DIRECT DEP PAYROLL",
    });
    addTxn({
      accountExternalId: "chase-checking",
      date: usDate(d),
      amount: money(3100),
      description: "MERIDIAN HEALTH DIRECT DEP PAYROLL",
    });
  }

  // --- Mortgage payment ---
  {
    const d = new Date(year, month, 3);
    addTxn({
      accountExternalId: "chase-checking",
      date: isoDate(d),
      amount: money(-2650),
      description: "ROCKET MORTGAGE PMT WEB ID 4471",
    });
  }

  // --- Daycare (scraper source, no API) ---
  {
    const d = new Date(year, month, 5);
    addTxn({
      accountExternalId: "chase-checking",
      date: usDate(d),
      amount: money(-1450),
      description: "PROCARE SCHOOL TUITION AUTOPAY",
    });
  }

  // --- Utilities ---
  addTxn({
    accountExternalId: "chase-checking",
    date: usDate(new Date(year, month, 8)),
    amount: money(-Math.round(rand(120, 240) * 100) / 100),
    description: "PG&E PACIFIC GAS ELECTRIC",
  });
  addTxn({
    accountExternalId: "chase-checking",
    date: usDate(new Date(year, month, 12)),
    amount: money(-89.99),
    description: "COMCAST XFINITY INTERNET",
  });
  addTxn({
    accountExternalId: "chase-checking",
    date: usDate(new Date(year, month, 18)),
    amount: money(-140.0),
    description: "VERIZON WIRELESS PAYMENTS",
  });

  // --- Subscriptions on Amex ---
  addTxn({
    accountExternalId: "amex-everyday",
    date: usDate(new Date(year, month, 7)),
    amount: money(-22.99),
    description: "NETFLIX.COM",
  });
  addTxn({
    accountExternalId: "amex-everyday",
    date: usDate(new Date(year, month, 9)),
    amount: money(-11.99),
    description: "SPOTIFY USA",
  });
  addTxn({
    accountExternalId: "amex-everyday",
    date: usDate(new Date(year, month, 14)),
    amount: money(-13.99),
    description: "DISNEYPLUS SUBSCRIPTION",
  });

  // --- HSA contribution (document source) ---
  addTxn({
    accountExternalId: "healthequity-hsa",
    date: isoDate(new Date(year, month, 2)),
    amount: money(300),
    description: "HEALTHEQUITY EMPLOYER CONTRIBUTION",
  });

  // --- Transfer checking to savings ---
  addTxn({
    accountExternalId: "chase-checking",
    date: usDate(new Date(year, month, 16)),
    amount: money(-500),
    description: "ONLINE TRANSFER TO SAV ...8841",
  });
  addTxn({
    accountExternalId: "chase-savings",
    date: usDate(new Date(year, month, 16)),
    amount: money(500),
    description: "ONLINE TRANSFER FROM CHK ...2231",
  });

  // --- Groceries (with line items) ---
  const groceryCount = randInt(4, 7);
  for (let i = 0; i < groceryCount; i += 1) {
    const day = randInt(1, Math.min(lastDay, isFinalMonth ? 15 : lastDay));
    const storeKey = pick(GROCERY_STORES);
    const { items, total } = makeGroceryLineItems(storeKey);
    const onSapphire = rng() > 0.5;
    addTxn({
      accountExternalId: onSapphire ? "chase-sapphire" : "amex-everyday",
      date: usDate(new Date(year, month, day)),
      amount: money(-total),
      description: `${storeKey} #${randInt(100, 999)}`,
      lineItems: items,
    });
  }

  // --- Dining ---
  const diningCount = randInt(4, 9);
  for (let i = 0; i < diningCount; i += 1) {
    const day = randInt(1, isFinalMonth ? 15 : lastDay);
    const spot = pick(DINING);
    addTxn({
      accountExternalId: rng() > 0.5 ? "chase-sapphire" : "amex-everyday",
      date: usDate(new Date(year, month, day)),
      amount: money(-(Math.round(rand(spot.min, spot.max) * 100) / 100)),
      description: spot.desc,
    });
  }

  // --- Gas ---
  const gasCount = randInt(2, 4);
  for (let i = 0; i < gasCount; i += 1) {
    const day = randInt(1, isFinalMonth ? 15 : lastDay);
    const station = pick(GAS);
    addTxn({
      accountExternalId: "chase-sapphire",
      date: usDate(new Date(year, month, day)),
      amount: money(-(Math.round(rand(station.min, station.max) * 100) / 100)),
      description: station.desc,
    });
  }

  // --- Medical (occasional) ---
  if (rng() > 0.4) {
    const day = randInt(1, isFinalMonth ? 15 : lastDay);
    const visit = pick(MEDICAL);
    addTxn({
      accountExternalId: "amex-everyday",
      date: usDate(new Date(year, month, day)),
      amount: money(-(Math.round(rand(visit.min, visit.max) * 100) / 100)),
      description: visit.desc,
    });
  }

  // --- Amazon (online shopping, merchant level only) ---
  const amazonCount = randInt(2, 5);
  for (let i = 0; i < amazonCount; i += 1) {
    const day = randInt(1, isFinalMonth ? 15 : lastDay);
    addTxn({
      accountExternalId: rng() > 0.5 ? "amex-everyday" : "chase-sapphire",
      date: usDate(new Date(year, month, day)),
      amount: money(-(Math.round(rand(9, 140) * 100) / 100)),
      description: `AMZN MKTP US*${randInt(10000, 99999)}`,
    });
  }

  // --- Credit card payments (transfer from checking) ---
  // Pay off the prior statement balance, leaving only the current month's
  // charges revolving. This keeps card balances realistically negative.
  const payDay = Math.min(lastDay, 22);
  const amexPay = Math.round(Math.max(0, -amexStatement) * 100) / 100;
  const sapphirePay = Math.round(Math.max(0, -sapphireStatement) * 100) / 100;
  if (amexPay > 0) {
    addTxn({
      accountExternalId: "chase-checking",
      date: usDate(new Date(year, month, payDay)),
      amount: money(-amexPay),
      description: "ONLINE TRANSFER TO AMEX CARD",
    });
    addTxn({
      accountExternalId: "amex-everyday",
      date: usDate(new Date(year, month, payDay)),
      amount: money(amexPay),
      description: "ONLINE TRANSFER FROM CHK PAYMENT THANK YOU",
    });
  }
  if (sapphirePay > 0) {
    addTxn({
      accountExternalId: "chase-checking",
      date: usDate(new Date(year, month, payDay)),
      amount: money(-sapphirePay),
      description: "ONLINE TRANSFER TO CHASE SAPPHIRE",
    });
    addTxn({
      accountExternalId: "chase-sapphire",
      date: usDate(new Date(year, month, payDay)),
      amount: money(sapphirePay),
      description: "ONLINE TRANSFER FROM CHK PAYMENT THANK YOU",
    });
  }
}

// A single manual cash entry to exercise the manual source on a real account.
addTxn({
  accountExternalId: "chase-checking",
  date: "2026-02-10",
  amount: money(-60),
  description: "ONLINE TRANSFER TO PETTY CASH MANUAL",
});

// Opening balances so the depository and credit balances land in a sensible
// range. Recorded as dated transactions, the single source of each balance.
const OPENING = new Date(2025, 11, 1);
addTxn({
  accountExternalId: "chase-checking",
  date: isoDate(OPENING),
  amount: money(7800),
  description: "OPENING BALANCE",
});
addTxn({
  accountExternalId: "chase-savings",
  date: isoDate(OPENING),
  amount: money(24500),
  description: "OPENING BALANCE",
});
addTxn({
  accountExternalId: "healthequity-hsa",
  date: isoDate(OPENING),
  amount: money(4100),
  description: "OPENING BALANCE",
});

/**
 * The assembled raw dataset. Stable across runs thanks to the seeded generator.
 */
export const fillerDataset: RawDataset = {
  accounts,
  transactions,
  holdings,
  liabilities,
};
