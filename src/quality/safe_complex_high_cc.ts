/** SAFE mirror — low CC. */
export function classify(a: number, b: number, kind: string): string {
  if (kind === 'x') return a > 0 ? 'xp' : 'xn';
  if (kind === 'y') return a && b ? 'y_ok' : 'y_alt';
  return 'default';
}
