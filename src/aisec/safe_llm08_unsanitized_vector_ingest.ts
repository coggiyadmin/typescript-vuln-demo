// SAFE mirror (OWASP LLM08) — sanitized, size-bounded, namespaced per tenant.
const INDEX: Record<string, any[]> = {};
export function ingest(tenant: string, text: string) {
  const clean = text.replace(/\x00/g, '').slice(0, 20000);
  (INDEX[tenant] = INDEX[tenant] || []).push({ text: clean, vector: embed(clean) });
}
function embed(t: string): number[] { return t.split(' ').map(w => w.length).slice(0, 512); }
