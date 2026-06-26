/** IL-1 polyglot — TypeScript → SQL DSL (CWE-89). */
import express from 'express';
import { Pool } from 'pg';

const app = express();
const pool = new Pool();

app.get('/user', async (req, res) => {
  const name = String(req.query.name ?? ''); // SOURCE
  const q = "SELECT * FROM users WHERE name = '" + name + "'"; // SINK CWE-89
  await pool.query(q);
  res.end('ok');
});
export default app;
