/**
 * Display formatters. These only format numbers that already came from a
 * database query. They never compute or estimate a figure.
 */

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const usdCents = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Whole-dollar currency, for headline figures. */
export function formatUsd(value: number): string {
  return usd.format(value);
}

/** Currency with cents, for line-level figures. */
export function formatUsdCents(value: number): string {
  return usdCents.format(value);
}

const qty = new Intl.NumberFormat("en-US", { maximumFractionDigits: 4 });

export function formatQuantity(value: number): string {
  return qty.format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(3)}%`;
}

export function formatDate(value: string): string {
  // value is an ISO date string (YYYY-MM-DD) from the database.
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
