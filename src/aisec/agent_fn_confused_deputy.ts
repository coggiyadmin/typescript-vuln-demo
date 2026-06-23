/** Excessive Agency FN (OWASP LLM06) — confused deputy: model-chosen URL + ambient
 * privileged token, no host allowlist (SSRF/IDOR via tool). Expected: trust layer MISS. */
const TOKEN = process.env.SERVICE_TOKEN || '';
export async function fetchTool(url: string): Promise<string> {
  // SINK (LLM06 confused-deputy)
  const r = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  return r.text();
}
export const tools = [{ name: 'fetch', fn: fetchTool }];
