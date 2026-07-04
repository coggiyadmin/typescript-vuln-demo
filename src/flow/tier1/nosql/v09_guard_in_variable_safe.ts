// v09 guard-in-variable
const ALLOWED = new Set<string>(['name', 'status']);
export function find(col: string, val: string): Record<string, string> | undefined {
  if (ALLOWED.has(col)) return { [col]: val };
}
