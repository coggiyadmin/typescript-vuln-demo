// v10 allowlist-set — bound params after numeric allowlist gate.
import sqlite3 from 'sqlite3';
const SAFE_IDS = new Set<number>([1, 2, 3]);
export function lookup(userId: number): void {
  if (SAFE_IDS.has(userId)) {
    new sqlite3.Database(':memory:').all('SELECT * FROM users WHERE id=?', [userId]);
  }
}
