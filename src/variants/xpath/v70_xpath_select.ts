import express, { Request, Response } from 'express';
import * as xpath from 'xpath';
import { DOMParser } from 'xmldom';
const app = express();
app.get('/xp', (req: Request, res: Response) => {
  const name = String(req.query.name); // SOURCE
  const doc = new DOMParser().parseFromString('<root/>');
  xpath.select("//user[@name='" + name + "']", doc); // SINK CWE-643
  res.end('ok');
});
