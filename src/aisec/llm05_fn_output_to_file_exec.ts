// Improper Output Handling FN (OWASP LLM05) — deferred exec via staged module. MISS.
import fs from 'fs';
const PLUGIN = '/var/app/plugins/generated.js';
export function stage(code: string): void { fs.writeFileSync(PLUGIN, code); } // SOURCE
export function activate() { return require(PLUGIN); }                        // SINK (deferred)
