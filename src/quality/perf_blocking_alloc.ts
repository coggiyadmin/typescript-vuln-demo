/** Performance anti-pattern — sync read + unbounded alloc. */
import fs from 'fs';

export function processLog(path: string): string[][] {
  const data = fs.readFileSync(path, 'utf8');
  return data.split('\n').map((l) => l.split(',').concat(l.split(',')));
}
