// v09 guard-in-variable
const ALLOWED = new Set<string>(['{}', '[]']);
export function loads(raw: string): unknown { if (ALLOWED.has(raw)) return JSON.parse(raw); }
