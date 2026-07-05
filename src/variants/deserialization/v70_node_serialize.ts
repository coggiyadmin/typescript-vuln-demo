import express, { Request, Response } from 'express';
import * as serialize from 'node-serialize';
const app = express();
app.post('/d', (req: Request, res: Response) => {
  const blob = (req.body as Buffer).toString(); // SOURCE
  (serialize as any).unserialize(blob); // SINK CWE-502 node-serialize RCE
  res.end('ok');
});
