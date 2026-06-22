// Cross-file taint — SINK side (SQL injection, CWE-89). Imported by
// xf_sqli_controller.ts; `name` arrives tainted across the file boundary.
import { Pool } from 'pg';

const pool = new Pool();

export function findUser(name: string): Promise<unknown> {
  // SINK (CWE-89): tainted name concatenated directly into the SQL string.
  return pool.query("SELECT * FROM users WHERE name = '" + name + "'");
}
