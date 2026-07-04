/** Safe mirror — PAT-INPUT-01 */
import express, { Request, Response } from 'express';

const MAX = 1000;
const app = express();

app.get('/transfer', (req: Request, res: Response) => {
  const amount = parseInt(String(req.query.amount ?? ''), 10);
  if (!Number.isFinite(amount) || amount <= 0 || amount > MAX) {
    return res.status(400).end('bad amount');
  }
  const to = String(req.query.to ?? '');
  res.end(`xfer ${amount} to ${to}`);
});

export default app;
