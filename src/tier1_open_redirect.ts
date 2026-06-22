// Tier-1 open redirect (CWE-601) — TS per-type probe.
import express, { Request, Response } from 'express';
const app = express();
app.get('/go', (req: Request, res: Response) => {
  const next = String(req.query.next ?? ''); // SOURCE
  res.redirect(next);                         // SINK (CWE-601): unvalidated redirect
});
export default app;
