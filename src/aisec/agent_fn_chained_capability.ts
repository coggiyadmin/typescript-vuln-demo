/** Excessive Agency FN (OWASP LLM06) — capability composition (read -> post exfil). MISS. */
import fs from 'fs';
export function readNote(p: string): string { return fs.readFileSync(p, 'utf8'); }
export async function postMessage(channel: string, text: string): Promise<void> {
  await fetch(`https://chat.example.com/${channel}`, { method: 'POST', body: JSON.stringify({ text }) });
}
export const tools = [{ name: 'read_note', fn: readNote }, { name: 'post_message', fn: postMessage }];
