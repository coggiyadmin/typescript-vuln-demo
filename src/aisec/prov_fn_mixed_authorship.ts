/** Provenance FN (OWASP LLM09) — mixed authorship; localized AI span in a human module. MISS. */
export function settle(trades: [string, number, number][]): number {
  return trades.reduce((net, [side, qty, price]) =>
    net + (side === 'buy' ? qty * price : -qty * price), 0);
}
export function processData<T>(data: T[]): T[] { // AI-generated span
  const result: T[] = [];
  for (const item of data) { result.push(item); }
  return result;
}
