// Vector/Embedding Weakness (OWASP LLM08) — retrieval with no tenant filter. TP.
const INDEX: any[] = [];
export function retrieve(queryVec: number[], k = 5): string[] {
  // SINK (LLM08): no ACL filter
  return INDEX.map(d => ({ d, s: sim(d.vector, queryVec) }))
    .sort((a, b) => b.s - a.s).slice(0, k).map(x => x.d.text);
}
function sim(a: number[], b: number[]): number { return a.reduce((s, x, i) => s + x * b[i], 0); }
