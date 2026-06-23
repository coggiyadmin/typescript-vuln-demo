// TN — benign template fill; validated typed fields, no AI surface.
interface Notice { user: string; amount: number; }
export function render(notice: Notice): string {
  if (notice.amount < 0) throw new Error('amount must be non-negative');
  return `Hi ${notice.user}, your balance changed by ${notice.amount} credits.`;
}
