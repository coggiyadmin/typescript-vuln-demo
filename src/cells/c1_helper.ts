// #1 cross-file taint — HELPER half. The sink lives here; the tainted value
// arrives as a parameter from c1.ts. A clean #1 probe needs a sink that does NOT
// fire on a bare param (per COMBINATION_MATRIX #1 caveat) — exec qualifies.
import { exec } from 'child_process';

export function runHost(host: string): void {
  exec('ping -c 1 ' + host); // SINK (CWE-78) — taint must arrive cross-file from c1.ts
}
