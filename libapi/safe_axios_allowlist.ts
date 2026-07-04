// Z6 benign mirror — axios fetch gated by module-level host allowlist (SSRF FP tax).
import axios from 'axios';
const ALLOWED_HOSTS = new Set<string>(['api.internal.example.com', 'cdn.example.com']);

export async function fetchSafe(url: string): Promise<unknown> {
  const host = new URL(url).hostname;
  if (ALLOWED_HOSTS.has(host)) {
    return (await axios.get(url)).data;
  }
  return null;
}
