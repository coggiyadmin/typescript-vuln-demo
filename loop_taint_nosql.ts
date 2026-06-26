import express from 'express';
import { MongoClient } from 'mongodb';
const app = express();
const db = new MongoClient('mongodb://localhost').db('app');
app.use(express.json());
app.get('/list', (req, res) => {
  const items: string[] = [];
  for (const x of [].concat(req.query.uid as any || [])) { items.push(String(x)); }
  const uid = items[0] || '';
  db.collection('users').findOne({ user: uid, active: true });
  res.end('ok');
});
export default app;
