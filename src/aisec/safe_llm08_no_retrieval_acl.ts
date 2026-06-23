// SAFE mirror (OWASP LLM08) — retrieval scoped to the caller's tenant first.
const INDEX: any[] = [];
export function retrieve(tenant: string, queryVec: number[], k = 5): string[] {
  return INDEX.filter(d => d.tenant === tenant)
    .map(d => ({ d, s: sim(d.vector, queryVec) }))
    .sort((a, b) => b.s - a.s).slice(0, k).map(x => x.d.text);
}
function sim(a: number[], b: number[]): number { return a.reduce((s, x, i) => s + x * b[i], 0); }
