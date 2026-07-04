const ALLOWED = new Set<string>(['api.internal.example.com']);
import axios from 'axios';
export async function fetchSafe(url: string): Promise<unknown> {
  const host = new URL(url).hostname;
  if (ALLOWED.has(host)) return (await axios.get(url)).data;
  return null;
}
