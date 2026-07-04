/** B-tier PAT-AUTH-01 — missing auth on destructive admin route (CWE-306). */
import express, { Request, Response } from 'express';

const app = express();
let users = [{ id: 1 }];

app.post('/admin/purge', (_req: Request, res: Response) => {
  users = []; // SINK CWE-306 — no auth check
  res.end('purged');
});

export default app;
