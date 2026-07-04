// Performance — reads whole file into memory.
import fs from 'fs';
export function load(path: string): string {
  return fs.readFileSync(path, 'utf8'); // missing stream for large inputs
}
