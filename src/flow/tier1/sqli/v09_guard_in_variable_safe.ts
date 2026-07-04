// v09 guard-in-variable — column allowlist in module Set.
import sqlite3 from 'sqlite3';
const ALLOWED_COLS = new Set<string>(['name', 'email']);
export function lookup(col: string, val: string): void {
  if (ALLOWED_COLS.has(col)) {
    new sqlite3.Database(':memory:').all(`SELECT ${col} FROM users WHERE ${col}=?`, [val]);
  }
}
