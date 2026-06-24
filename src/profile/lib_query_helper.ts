// FP-target (#128/#140) — LIBRARY profile; `where` is caller-supplied, not an entry point.
export function byFilter(db: any, where: string) {
  return db.query('SELECT * FROM items WHERE ' + where); // not entry-point-reachable
}
