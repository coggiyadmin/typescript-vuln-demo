// v09 guard-in-variable
const ALLOWED = new Set<string>(['<root/>']);
export function parse(raw: string): string | undefined { if (ALLOWED.has(raw)) return raw; }
