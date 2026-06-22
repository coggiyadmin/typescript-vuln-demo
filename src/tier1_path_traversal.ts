// Tier-1 path traversal (CWE-22) — TS per-type probe.
import express, { Request, Response } from 'express';
import * as fs from 'fs';
const app = express();
app.get('/file', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');     // SOURCE
  res.send(fs.readFileSync('/var/data/' + name)); // SINK (CWE-22): no guard
});
export default app;
