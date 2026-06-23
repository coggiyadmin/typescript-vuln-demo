/** Excessive Agency (OWASP LLM06). */
import { execSync } from 'child_process';

export function shellTool(command: string): string {
  return execSync(command, { encoding: 'utf8' });
}
