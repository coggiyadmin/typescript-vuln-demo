import express, { Request, Response } from 'express';
import * as util from 'util';
const app = express();
app.get('/f', (req: Request, res: Response) => {
  const fmt = String(req.query.fmt); // SOURCE
  res.send(util.format(fmt, 'arg')); // SINK CWE-134 user-controlled format
});
