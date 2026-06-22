// Safe mirrors for the combination cells — FP targets. MUST scan to 0 security
// findings (zero-FP gate). One safe counterpart per sanitizer combo.
import express, { Request, Response } from 'express';
import { execFile } from 'child_process';

const app = express();

// #6 safe — correct-context handling: validate against an allowlist, then execFile
// (no shell), so the value can never reach a shell interpreter.
const ALLOWED = new Set(['status', 'health', 'version']);
app.post('/safe6', (req: Request, res: Response) => {
  const cmd = String(req.body.cmd);
  if (!ALLOWED.has(cmd)) { res.status(400).end(); return; }
  execFile('/usr/bin/app', [cmd]); // no shell, allowlisted — SAFE
  res.end();
});

// #7/#8 safe — a real wrapper that enforces an integer-only contract before use.
function toId(x: unknown): number {
  const n = Number(x);
  if (!Number.isInteger(n) || n < 0) throw new Error('bad id');
  return n;
}
app.post('/safe8', (req: Request, res: Response) => {
  const id = toId(req.body.id); // genuinely sanitized → number
  execFile('/usr/bin/lookup', [String(id)]); // SAFE
  res.end();
});

export default app;
