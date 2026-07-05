import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
const later = (v: string) => new Promise<string>((r) => setImmediate(() => r(v)));
app.post('/a', async (req: Request, res: Response) => {
  const name = await later(String(req.body.q ?? '')); // taint through await
  xpath.select("//user[name='" + name + "']", doc); // SINK CWE-643
  res.end('ok');
});
export default app;
