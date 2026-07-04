// Cmdi variant: shelljs.exec — shell helper library.
import express, { Request, Response } from 'express';
import shell from 'shelljs';
const app = express();
app.get('/r', (req: Request, res: Response) => {
  const dir = String(req.query.dir ?? '');
  const out = shell.exec('ls ' + dir); // SINK CWE-78 shelljs
  res.send(out.stdout);
});
export default app;
