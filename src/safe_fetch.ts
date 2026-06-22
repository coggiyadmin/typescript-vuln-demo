/**
 * SAFE / TN fixture — outbound HTTP client guarded by a host allowlist (anti-SSRF).
 * A user-supplied target is only fetched if its host is on a fixed allowlist.
 * The scanner MUST produce ZERO security findings; any ssrf finding is a FALSE POSITIVE.
 */

const ALLOWED_HOSTS = new Set([
  'api.example.com',
  'cdn.example.com',
  'images.example.com',
]);

/** Returns true only for https URLs whose host is explicitly allowlisted. */
function isAllowed(rawUrl: string): boolean {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return false;
  }
  return url.protocol === 'https:' && ALLOWED_HOSTS.has(url.hostname);
}

export async function fetchThumbnail(target: string): Promise<ArrayBuffer> {
  if (!isAllowed(target)) {
    throw new Error('host not allowlisted');
  }
  // Only reachable for vetted https hosts.
  const res = await fetch(target, { redirect: 'error' });
  if (!res.ok) throw new Error(`upstream ${res.status}`);
  return res.arrayBuffer();
}
