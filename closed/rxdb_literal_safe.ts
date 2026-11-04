import { createRxDatabase } from 'rxdb';
import express from 'express';
const app = express();
app.post('/f', async (req, res) => {
  const db = await createRxDatabase({ name: 'x', storage: {} as any });
  const safe = await db.items.find({ selector: { status: 'open' } }).exec();
  res.json({ safe });
});
