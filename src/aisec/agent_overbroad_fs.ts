/** Excessive Agency (OWASP LLM06) — over-broad fs tool rooted at '/', no jail. */
import fs from 'fs';
import path from 'path';
const FS_ROOT = '/'; // SINK (LLM06)
export function readTool(rel: string): string { return fs.readFileSync(path.join(FS_ROOT, rel), 'utf8'); }
export const tools = [{ name: 'fs_read', fn: readTool }];
