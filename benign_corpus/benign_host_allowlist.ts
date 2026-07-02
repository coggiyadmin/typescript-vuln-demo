const ALLOWED = new Set(['api.internal.example.com']);
export function fetchUrl(url: string) {
  const host = new URL(url).hostname;
  if (!ALLOWED.has(host)) throw new Error('host not allowed');
}
