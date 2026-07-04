// v10 allowlist-set — prefix Set gate before fetch.
import http from 'http';
const ALLOWED = new Set<string>(['https://cdn.example.com', 'https://api.example.com']);
export function fetchUrl(url: string): void {
  const base = url.split('?')[0];
  if (ALLOWED.has(base)) http.get(url);
}
