// Vector/Embedding Weakness (OWASP LLM08) — untrusted doc embedded unsanitized. TP.
const INDEX: any[] = [];
export async function ingest(url: string) {
  const d = await (await fetch(url)).text();
  INDEX.push({ text: d, vector: embed(d) }); // SINK (LLM08): unsanitized
}
function embed(t: string): number[] { return t.split(' ').map(w => w.length).slice(0, 512); }
