import express, { Request, Response } from 'express';
import sqlite3 from 'sqlite3';
const app = express(); const db = new sqlite3.Database('app.db');
app.get('/u', (req: Request, res: Response) => {
  db.all("SELECT * FROM users WHERE name='" + req.query.name + "'", [], (_, r) => res.json(r)); // SINK
});
export default app;
