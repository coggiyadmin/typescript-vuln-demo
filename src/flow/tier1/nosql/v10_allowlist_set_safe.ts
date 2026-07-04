// v10 allowlist-set
const SAFE = new Set<number>([1, 2, 3]);
export function lookup(id: number): { id: number } | undefined { if (SAFE.has(id)) return { id }; }
