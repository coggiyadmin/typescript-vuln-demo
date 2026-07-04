/** B-tier PAT-INFO-01 — debug response leaks env (CWE-200). */
import express, { Request, Response } from 'express';

const app = express();

app.get('/debug', (req: Request, res: Response) => {
  res.json({ token: process.env.API_TOKEN, q: req.query.q }); // SINK CWE-200
});

export default app;
