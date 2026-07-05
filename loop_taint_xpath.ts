import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
app.get('/l', (req: Request, res: Response) => {
  const parts: string[] = [];
  const q = String(req.query.q ?? '');
  for (const ch of q.split('')) parts.push(ch);
  const acc = parts.join(''); // loop-carried taint
  xpath.select("//user[name='" + acc + "']", doc); // SINK CWE-643
  res.end('ok');
});
export default app;
