/** Provenance FN (OWASP LLM09) — laundered AI authorship; template-shaped. MISS. */
export function computeWeightedAverage(values: number[], weights: number[]): number {
  if (values.length !== weights.length) throw new Error('length mismatch');
  const totalWeight = weights.reduce((a, b) => a + b, 0);
  if (totalWeight === 0) throw new Error('weights sum to zero');
  return values.reduce((s, v, i) => s + v * weights[i], 0) / totalWeight;
}
