// v10 allowlist-set
const SAFE = new Set<string>(['grep:/var/log/app.log']);
import { execFile } from 'child_process';
export function run(cmd: string, path: string): void {
  if (SAFE.has(`${cmd}:${path}`)) execFile(cmd, [path], () => {});
}
