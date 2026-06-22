// SAFE mirror — no user input in the XPath; fetch all and filter in JS. ZERO findings.
import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/u', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  const all = xpath.select('//user/name/text()', doc) as Node[]; // constant XPath
  const count = all.filter((n) => n.nodeValue === name).length;  // compare in JS
  res.json(count);
});
export default app;
