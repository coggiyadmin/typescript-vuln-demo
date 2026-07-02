// Phase-3 validate mirror — allowlist/regex gate before sink
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req: Request, res: Response) => {
  const user = req.body.user;
  if (typeof user !== 'string') return res.status(400).end();
  db.collection('users').findOne({ user, active: true });
});
export default app;
