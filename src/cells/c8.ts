// #8 custom-wrapper sanitizer — a wrapper that does NOT actually sanitize for the
// command context (interprocedural). FN: must fire (expected MISS today, #67/#79).
// The clean counterpart is in safe_cells.ts (a real allowlist wrapper).
import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
// looks like a sanitizer, only trims — does not neutralize shell metacharacters
function sanitize(x: string): string { return x.trim(); }

app.post('/c8', (req: Request, res: Response) => {
  const cmd = sanitize(req.body.cmd); // SOURCE through fake-wrapper
  exec('echo ' + cmd);                // SINK (CWE-78) — wrapper must not be credited
  res.end();
});

export default app;
