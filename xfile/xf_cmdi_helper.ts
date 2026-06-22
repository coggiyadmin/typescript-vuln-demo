// Cross-file taint — SINK side (command injection, CWE-78). Imported by
// xf_cmdi_controller.ts; `host` arrives tainted across the file boundary.
import { exec } from 'child_process';

export function runPing(host: string): void {
  // SINK (CWE-78): tainted host concatenated into a shell command string.
  exec('ping -c 1 ' + host);
}
