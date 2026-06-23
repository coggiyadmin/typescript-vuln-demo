// TN — benign parser; trims and drops blank lines.
export function parseLines(lines: string[]): string[] { return lines.map(l => l.trim()).filter(Boolean); }
