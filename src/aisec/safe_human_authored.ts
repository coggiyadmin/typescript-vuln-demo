/** SAFE mirror — idiomatic code. */
export function sumPositive(values: number[]): number {
  return values.filter((v) => v > 0).reduce((a, b) => a + b, 0);
}
