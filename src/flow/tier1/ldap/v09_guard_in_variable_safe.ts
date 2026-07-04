// v09 guard-in-variable
const ALLOWED = new Set<string>(['dc=example,dc=com']);
export function search(base: string, filt: string): string { if (ALLOWED.has(base)) return base + filt; return ''; }
