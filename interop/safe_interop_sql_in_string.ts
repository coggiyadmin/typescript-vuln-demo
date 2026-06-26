/** SAFE mirror — parameterized query. */
import express from 'express';
import { Pool } from 'pg';

const app = express();
const pool = new Pool();

app.get('/user', async (req, res) => {
  const name = String(req.query.name ?? '');
  await pool.query('SELECT * FROM users WHERE name = $1', [name]);
  res.end('ok');
});
export default app;
