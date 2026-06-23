// TN — benign read-only lookup; fixed catalog by exact key.
const CATALOG: Record<string, string> = { USD: 'US Dollar', EUR: 'Euro', JPY: 'Japanese Yen' };
export function currencyName(code: string): string { return CATALOG[code.toUpperCase()] ?? 'unknown'; }
