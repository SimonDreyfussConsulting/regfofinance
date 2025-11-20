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
