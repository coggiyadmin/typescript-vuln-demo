import * as fs from 'fs';
// cognium-dev#1137 — the file contents are tainted; only their length is passed on.
export function loadSpec(p: string): string {
  const text = fs.readFileSync(p, 'utf8');
  return text;
}
