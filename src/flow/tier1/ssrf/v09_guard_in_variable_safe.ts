// v09 guard-in-variable — host allowlist in module Set.
import http from 'http';
const ALLOWED_HOSTS = new Set<string>(['api.internal.example.com']);
export function fetchUrl(url: string): void {
  const host = new URL(url).hostname;
  if (ALLOWED_HOSTS.has(host)) http.get(url);
}
