/**
 * BENIGN-BASELINE TRUE-NEGATIVE FIXTURE.
 *
 * Ordinary typed business logic with NO security surface: no HTTP, no DB, no
 * file I/O, no exec, no crypto, no secrets. The scanner MUST produce ZERO
 * security findings here. Measures specificity / the noise floor.
 */

export interface LineItem {
  sku: string;
  unitPrice: number;
  quantity: number;
}

export type Tier = 'standard' | 'silver' | 'gold';

const TIER_RATES: Record<Tier, number> = { standard: 0, silver: 0.05, gold: 0.1 };

const toCents = (n: number): number => Math.round(n * 100) / 100;

const extended = (item: LineItem): number => item.unitPrice * item.quantity;

/** Sum of all line extended prices, rounded to cents. */
export function subtotal(items: LineItem[]): number {
  return toCents(items.reduce((acc, it) => acc + extended(it), 0));
}

/** Pick a discount tier from a subtotal. */
export function tierFor(amount: number): Tier {
  if (amount >= 1000) return 'gold';
  if (amount >= 250) return 'silver';
  return 'standard';
}

/** Final total after the tier discount. */
export function total(items: LineItem[]): number {
  const sub = subtotal(items);
  return toCents(sub - sub * TIER_RATES[tierFor(sub)]);
}

/** Group items by the category code before the dash in the SKU. */
export function byCategory(items: LineItem[]): Record<string, LineItem[]> {
  return items.reduce<Record<string, LineItem[]>>((groups, it) => {
    const code = it.sku.includes('-') ? it.sku.split('-')[0] : 'misc';
    (groups[code] ||= []).push(it);
    return groups;
  }, {});
}

/** SKUs sorted by descending extended price. */
export function topSkus(items: LineItem[], limit: number): string[] {
  return [...items]
    .sort((a, b) => extended(b) - extended(a))
    .slice(0, limit)
    .map((it) => it.sku);
}
