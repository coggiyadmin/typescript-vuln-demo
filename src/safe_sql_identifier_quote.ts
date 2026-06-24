// FP-target (cognium-dev#163, ts) — SQL *identifier* (column) validated against an allowlist
// regex and quoted; the value is bound as a placeholder parameter. Must not be flagged
// sql_injection.
interface Queryable { query(sql: string, params: unknown[]): Promise<unknown>; }

function quoteIdent(id: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(id)) throw new Error('bad identifier');
  return `"${id}"`;
}

export function byColumn(db: Queryable, column: string, value: string): Promise<unknown> {
  const col = quoteIdent(column); // identifier validated + quoted
  return db.query(`SELECT * FROM items WHERE ${col} = ?`, [value]); // value bound as param
}
