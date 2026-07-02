// Phase-3 validate mirror — allowlist/regex gate before sink
import express, { Request, Response } from 'express';
import xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/x', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  if (!/^[a-zA-Z0-9_-]+$/.test(name)) return res.status(403).end();
  xpath.select('//user[name="' + name + '"]', doc);
  res.end();
});
export default app;
