/** SAFE mirror — allowlisted commands. */
import { execFileSync } from 'child_process';
const ALLOW = new Set(['pwd', 'date']);

export function shellTool(command: string): string {
  if (!ALLOW.has(command)) throw new Error('not allowed');
  return execFileSync(command, { encoding: 'utf8' });
}
