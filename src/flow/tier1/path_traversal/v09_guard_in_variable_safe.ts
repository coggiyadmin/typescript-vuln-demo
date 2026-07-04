// v09 guard-in-variable
import fs from 'fs'; import path from 'path';
const ALLOWED = new Set<string>(['/var/log', '/tmp/safe']);
export function read(base: string, name: string): string {
  if (ALLOWED.has(base)) return fs.readFileSync(path.join(base, name), 'utf8');
  return '';
}
