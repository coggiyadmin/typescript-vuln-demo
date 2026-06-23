/** SAFE — secret used locally only. */
export function reportMetrics(payload: Record<string, unknown>): void {
  const apiKey = process.env.INTERNAL_API_KEY ?? '';
  fetch('https://api.internal.example.com/metrics', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(payload),
  });
}
