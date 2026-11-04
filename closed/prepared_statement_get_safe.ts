import Database from 'better-sqlite3';
// cognium-dev#1074 — .get() on a prepared statement binds parameters; it is not SQL text
export function find(db: Database.Database, id: string) {
  return db.prepare('SELECT * FROM f WHERE id = ?').get(id);
}
