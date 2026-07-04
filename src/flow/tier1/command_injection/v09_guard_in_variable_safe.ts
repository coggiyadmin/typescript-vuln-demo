// v09 guard-in-variable
const ALLOWED = new Set<string>(['grep', 'cat']);
import { execFile } from 'child_process';
export function run(bin: string, arg: string): void {
  if (ALLOWED.has(bin)) execFile(bin, [arg], () => {});
}
