/** B-tier PAT-INPUT-01 — unbounded user amount in transfer (CWE-20). */
import express, { Request, Response } from 'express';

const app = express();

app.get('/transfer', (req: Request, res: Response) => {
  const amount = parseInt(String(req.query.amount ?? ''), 10); // SINK CWE-20
  const to = String(req.query.to ?? '');
  res.end(`xfer ${amount} to ${to}`);
});

export default app;
