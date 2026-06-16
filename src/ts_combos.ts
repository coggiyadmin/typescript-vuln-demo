/**
 * Combination × language matrix — TYPESCRIPT row.
 * express() app, plain types (no Router #75, no decorators #69), compact bodies
 * (avoid #77 instability). Each route exercises one combination.
 * FN probes must FIRE; FP probes must stay CLEAN.
 */
import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
declare const db: { query: (s: string, p?: unknown[]) => unknown };

// #2 path-sensitivity — tainted used in failure branch (FN: must fire)
app.post('/c2', (req: Request, res: Response) => {
  const c = req.body.code;
  if (!/^[0-9]+$/.test(c)) { eval(c); }   // CWE-94
  res.end();
});

// #3 loop-carried — iterate over a tainted array var (FN: must fire)
app.post('/c3', (req: Request, res: Response) => {
  const items: string[] = req.body.items;
  for (const it of items) { exec('echo ' + it); }  // CWE-78
});

// #5 OOP object flow — field set from input, used in method (FN: must fire)
class Job { cmd = ''; run() { exec('echo ' + this.cmd); } }   // CWE-78
app.post('/c5', (req: Request, res: Response) => {
  const j = new Job(); j.cmd = req.body.cmd; j.run(); res.end();
});

// #13 encoded — base64 decode then sink (FN: must fire)
app.post('/c13', (req: Request, res: Response) => {
  const cmd = Buffer.from(req.body.d, 'base64').toString('utf8');
  exec(cmd); res.end();   // CWE-78
});

// #11 fan-out — one source → two sinks (FN: must fire both)
app.post('/c11', (req: Request, res: Response) => {
  const u = req.body.u;
  exec('echo ' + u);                 // sink 1
  db.query('SELECT * FROM t WHERE id = ' + u);  // sink 2
  res.end();
});

// #6 wrong-context sanitizer — URL-encode (xss/ssrf) before COMMAND sink (FN: must fire)
app.post('/c6', (req: Request, res: Response) => {
  const u = encodeURIComponent(req.body.u);  // not a command sanitizer
  exec('echo ' + u); res.end();              // CWE-78 should still fire
});

// #7 fake sanitizer — no-op named clean() (FN: must fire)
function clean(x: string) { return x; }
app.post('/c7', (req: Request, res: Response) => {
  exec('echo ' + clean(req.body.u)); res.end();
});

// #9 comment/string-literal — sink syntax only in a string (FP: must stay clean)
app.post('/c9', (req: Request, res: Response) => {
  const example = "exec('rm -rf ' + userInput)";   // string literal only
  res.send(example);
});

export default app;
