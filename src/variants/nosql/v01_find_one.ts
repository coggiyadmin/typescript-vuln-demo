import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
const app = express(); const db = new MongoClient('mongodb://localhost').db('app');
app.post('/login', express.json(), (req: Request, res: Response) => {
  db.collection('users').findOne({ user: req.body.user, active: true }); // SINK CWE-943
});
export default app;
