// v10 allowlist-set
import fs from 'fs';
const SAFE = new Set<string>(['/var/log/app.log']);
export function read(target: string): string {
  if (SAFE.has(target)) return fs.readFileSync(target, 'utf8');
  return '';
}
