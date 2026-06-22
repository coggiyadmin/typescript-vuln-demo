// Tier-1 NoSQL injection (CWE-943) — TS per-type probe.
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req: Request, res: Response) => {
  const user = req.body.user; // SOURCE (object, may contain $-operators)
  // SINK (CWE-943): untrusted object used directly as a query filter.
  db.collection('users').findOne({ user, active: true }).then((u) => res.json(u));
});
export default app;
