import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';

const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
const app = express();
app.get('/f', (req: Request, res: Response) => {
  const u = String(req.query.u ?? '');
  xpath.select("//user[name='" + u + "']", doc); // SINK 1 CWE-643
  xpath.select("//admin[id='" + u + "']", doc); // SINK 2 CWE-643
  res.end('ok');
});
export default app;
