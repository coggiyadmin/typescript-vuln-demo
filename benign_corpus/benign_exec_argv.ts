import { execFile } from 'child_process';
export function grep(pattern: string) { execFile('grep', [pattern, '/var/log/app.log'], () => {}); }
