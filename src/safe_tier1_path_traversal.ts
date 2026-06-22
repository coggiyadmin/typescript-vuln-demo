// SAFE mirror — path confined to a base via resolve + prefix check. ZERO findings.
import express, { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';
const BASE = '/var/data';
const app = express();
app.get('/file', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  const resolved = path.resolve(BASE, name);
  if (resolved !== BASE && !resolved.startsWith(BASE + path.sep)) { res.status(403).end(); return; }
  res.send(fs.readFileSync(resolved));
});
export default app;
