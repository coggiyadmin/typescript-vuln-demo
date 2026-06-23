// Vector/Embedding FN (OWASP LLM08) — shared cache keyed only by query, not tenant. MISS.
const CACHE: Record<string, string[]> = {};
const INDEX: any[] = [];
export function retrieve(tenant: string, query: string): string[] {
  if (CACHE[query]) return CACHE[query]; // SINK (LLM08 FN)
  const hits = INDEX.filter(d => d.tenant === tenant && d.text.includes(query)).map(d => d.text);
  CACHE[query] = hits; return hits;
}
