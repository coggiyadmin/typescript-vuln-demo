import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express(); const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/x', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  xpath.select("//user[name='" + name + "']", doc); // SINK CWE-643
  res.end();
});
export default app;
