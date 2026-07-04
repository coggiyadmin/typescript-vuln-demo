// v09 guard-in-variable
const ALLOWED = new Set<string>(['user=%s']);
export function fmt(t: string, v: string): string | undefined { if (ALLOWED.has(t)) return t.replace('%s', v); }
