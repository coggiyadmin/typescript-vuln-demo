import * as fs from 'fs';
export function openAt(target: any): string {
  return fs.readFileSync(target, 'utf8');
}
