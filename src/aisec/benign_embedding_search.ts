// TN — benign similarity over a fixed single-owner list.
const DOCS: [string, number[]][] = [['greeting', [1, 0]], ['farewell', [0, 1]]];
export function nearest(vec: number[]): string { return DOCS.reduce((b, d) => (dot(d[1], vec) > dot(b[1], vec) ? d : b))[0]; }
function dot(a: number[], b: number[]): number { return a.reduce((s, x, i) => s + x * b[i], 0); }
