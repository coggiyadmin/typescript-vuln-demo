import express, { Request, Response } from 'express';
import * as libxml from 'libxmljs2';
const app = express();
app.post('/x', (req: Request, res: Response) => {
  const xml = (req.body as Buffer).toString(); // SOURCE
  libxml.parseXml(xml, { noent: true }); // SINK CWE-611 external entities enabled
  res.end('ok');
});
