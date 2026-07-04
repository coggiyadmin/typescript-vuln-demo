// v09 guard-in-variable
const ALLOWED = new Set<string>(['1+1', '2*3']);
export function evalExpr(expr: string): unknown { if (ALLOWED.has(expr)) return eval(expr); }
