import { createRxDatabase } from 'rxdb';
import express from 'express';
const app = express();
app.post('/f', async (req, res) => {
  const db = await createRxDatabase({ name: 'x', storage: {} as any });
  const docs = await db.items.find({ selector: req.body.selector }).exec();
  const q = db.items.find().where(req.query.field as string).eq(1);
  res.json({ docs, q });
});
