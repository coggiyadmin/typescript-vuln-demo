// SAFE mirror — coerce to string so $-operators can't be injected. ZERO findings.
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req: Request, res: Response) => {
  const user = String(req.body.user ?? ''); // coerced to a string literal
  db.collection('users').findOne({ user, active: true }).then((u) => res.json(u));
});
export default app;
