// v09 guard-in-variable
const ALLOWED = new Set<string>(['INFO', 'WARN']);
export function log(level: string, msg: string): void { if (ALLOWED.has(level)) console.log(`[${level}] ${msg}`); }
