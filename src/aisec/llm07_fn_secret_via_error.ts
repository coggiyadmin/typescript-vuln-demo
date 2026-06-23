// System-Prompt Leakage FN (OWASP LLM07) — secret leaks inside an error payload. MISS.
export function run(): never {
  const cfg = { system: 'triage', key: process.env.BILLING_API_KEY };
  throw new Error('config dump: ' + JSON.stringify(cfg)); // SINK (LLM07 indirect)
}
