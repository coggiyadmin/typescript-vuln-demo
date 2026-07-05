import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
app.get('/e', (req: Request, res: Response) => {
  const raw = String(req.query.d ?? '');
  const name = Buffer.from(raw, 'base64').toString('utf8'); // decoded taint
  xpath.select("//user[name='" + name + "']", doc); // SINK CWE-643
  res.end('ok');
});
export default app;
