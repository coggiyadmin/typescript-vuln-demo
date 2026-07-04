// v09 guard-in-variable
const ALLOWED = new Set<string>(['text/plain', 'application/json']);
export function setCt(v: string): string | undefined { if (ALLOWED.has(v)) return `Content-Type: ${v}`; }
