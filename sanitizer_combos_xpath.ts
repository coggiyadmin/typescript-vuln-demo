import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
const fake = (s: string) => s;
app.get('/wrong', (req: Request, res: Response) => {
  const v = String(req.query.v ?? '').replace(/</g, ''); // wrong sanitizer (HTML, not XPath)
  xpath.select("//user[name='" + v + "']", doc); // SINK CWE-643
  res.end('ok');
});
app.get('/fake', (req: Request, res: Response) => {
  xpath.select("//user[name='" + fake(String(req.query.v ?? '')) + "']", doc); // SINK CWE-643
  res.end('ok');
});
export default app;
