/** SAFE mirror (OWASP LLM06) — fs tool restricted to a fixed allowlist of keys (no user path). */
import fs from 'fs';
const ALLOWED: Record<string, string> = {
  readme: '/var/app/workspace/README.md', config: '/var/app/workspace/config.json' };
export function readTool(key: string): string {
  const p = ALLOWED[key];
  if (!p) throw new Error('not in allowlist');
  return fs.readFileSync(p, 'utf8');
}
export const tools = [{ name: 'fs_read', fn: readTool }];
