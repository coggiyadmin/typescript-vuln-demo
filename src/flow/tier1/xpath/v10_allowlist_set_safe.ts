// v09 guard-in-variable
const ALLOWED = new Set<string>(['//users/user[@id="1"]']);
export function query(expr: string): string { if (ALLOWED.has(expr)) return expr; return ''; }
