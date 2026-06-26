export async function lookup(db: { get: (q: string, p: unknown[]) => Promise<{ name: string }> }, userId: number) {
  const row = await db.get('SELECT name FROM users WHERE id = ?', [userId]);
  return row?.name ?? '';
}
