import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
const ALLOWED = new Set(['daily', 'weekly']);
app.get('/s', (req: Request, res: Response) => {
  const v = String(req.query.q ?? '');
  if (!ALLOWED.has(v)) { res.status(400).end('bad'); return; } // reject anything not allowlisted
  xpath.select("//user[role='member']", doc); // constant query — no user value in the sink
  res.end('ok');
});
export default app;
