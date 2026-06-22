// Tier-1 XPath injection (CWE-643) — TS per-type probe.
import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/u', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');                    // SOURCE
  const nodes = xpath.select("//user[name='" + name + "']", doc); // SINK (CWE-643)
  res.json(nodes.length);
});
export default app;
