// Phase-3 parameterize mirror — bound params / prepared API
import express, { Request, Response } from 'express';
import fs from 'fs'; import path from 'path';
const app = express(); const ROOT = '/data';
app.get('/r', (req: Request, res: Response) => {
  const full = path.resolve(ROOT, String(req.query.p ?? ''));
  if (!full.startsWith(ROOT)) return res.status(403).end();
  res.send(fs.readFileSync(full, 'utf8'));
});
export default app;
