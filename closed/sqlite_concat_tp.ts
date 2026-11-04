import sqlite3 from 'sqlite3';
// cognium-dev#1075 — SQL text concatenated into db.get stays sql_injection
const db = new sqlite3.Database('x.db');
export function q(req: { query: { id?: string } }) {
  db.get('SELECT * FROM f WHERE id = ' + req.query.id, () => {});
}
