// #1 cross-file taint — CALLER half. Source bound to a local, passed across the
// file boundary to the sink in c1_helper.ts. FN: must fire (expected MISS today,
// #67 parse + #106 cross-file). Scan the directory, not the file (runbook §2).
import express, { Request, Response } from 'express';
import { runHost } from './c1_helper';

const app = express();
app.post('/c1', (req: Request, res: Response) => {
  const host = req.body.host; // SOURCE
  runHost(host);              // crosses file boundary → SINK in c1_helper (CWE-78)
  res.end();
});

export default app;
