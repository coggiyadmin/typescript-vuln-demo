import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.use(express.json());
app.get('/async', async (req, res) => {
  const uid = await Promise.resolve(String(req.query.uid ?? ''));
  db.collection('users').findOne({ user: uid, active: true });
  res.end('ok');
});
export default app;
