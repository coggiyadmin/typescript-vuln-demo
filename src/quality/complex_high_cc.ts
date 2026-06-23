/** McCabe HIGH CC. */
export function classify(a: number, b: number, c: number, d: number, kind: string): string {
  if (kind === 'x') {
    if (a > 0 && b > 0 && c > 0) return d > 0 ? 'xppp' : 'xppn';
    if (a > 0 && b > 0 && c < 0) return 'xpn';
    if (a < 0) return 'xneg';
  }
  if (kind === 'y') return a && b ? 'y1' : 'y2';
  return 'default';
}
