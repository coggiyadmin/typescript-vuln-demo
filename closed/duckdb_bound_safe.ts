import { DuckDBInstance } from '@duckdb/node-api';
export async function byName(name: string) {
  const connection = await (await DuckDBInstance.create(':memory:')).connect();
  const stmt = await connection.prepare('SELECT * FROM t WHERE name = $1');
  stmt.bind([name]);
  return connection.run('SELECT * FROM t WHERE name = $1', [name]);
}
