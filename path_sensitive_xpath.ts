import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
app.get('/p', (req: Request, res: Response) => {
  const v = String(req.query.v ?? '');
  if (!v.startsWith('safe')) {
    xpath.select("//user[name='" + v + "']", doc); // SINK CWE-643 (failure branch tainted)
  }
  res.end('ok');
});
export default app;
