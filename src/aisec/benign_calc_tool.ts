/** TN — benign calculator tool; pure, bounded, side-effect-free. */
export function add(a: number, b: number): number { return a + b; }
export function percentOf(v: number, p: number): number { return (v * p) / 100; }
export const tools = [{ name: 'add', fn: add }, { name: 'percentOf', fn: percentOf }];
