/**
 * Returns the current year for use in content
 * @returns Current year as a number
 */
export function getContentYear(): number {
  return new Date().getFullYear();
}

/**
 * Returns the current year as a string
 * @returns Current year as a string
 */
export function getContentYearString(): string {
  return new Date().getFullYear().toString();
}

/**
 * Returns dynamic month and year for content freshness
 * - In December, shows "January [next year]" to get ahead
 * - Otherwise shows current month and year
 * @returns String like "January 2026" or "February 2026"
 */
export function getContentMonthYear(): string {
  const now = new Date();
  const month = now.getMonth(); // 0-11
  const year = now.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // If December, show January of next year
  if (month === 11) {
    return `January ${year + 1}`;
  }

  return `${monthNames[month]} ${year}`;
}
