import * as fs from 'fs';
export function loadSpec(p: string): string {
  const text = fs.readFileSync(p, 'utf8');
  return text;
}
