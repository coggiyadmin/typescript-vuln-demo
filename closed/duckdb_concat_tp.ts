import { DuckDBInstance } from '@duckdb/node-api';
import express from 'express';
const app = express();
app.get('/q', async (req, res) => {
  const connection = await (await DuckDBInstance.create(':memory:')).connect();
  const name = req.query.name as string;
  const a = await connection.runAndReadAll(`SELECT * FROM t WHERE name = '${name}'`);
  const c = await connection.stream('SELECT * FROM t WHERE x = ' + name);
  res.json({ a, c });
});
