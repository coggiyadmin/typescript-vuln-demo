import express from 'express';
import { DataSource } from 'typeorm';
const app = express();
const ds = new DataSource({ type: 'sqlite', database: ':memory:' });
app.get('/t', async (req, res) => {
  await ds.query('SELECT * FROM u WHERE id=' + String(req.query.id ?? '')); // SINK CWE-89
  res.end('ok');
});
export default app;
