// #4 async/callback — taint flows through a Promise/await continuation before the
// sink. FN: must fire (expected MISS today, #67). express() app, no decorators.
import express, { Request, Response } from 'express';
import { exec } from 'child_process';

const app = express();
const later = (v: string) => new Promise<string>((r) => setImmediate(() => r(v)));

app.post('/c4', async (req: Request, res: Response) => {
  const cmd = req.body.cmd;     // SOURCE
  const v = await later(cmd);   // taint survives the async hop
  exec('echo ' + v);            // SINK (CWE-78)
  res.end();
});

export default app;
