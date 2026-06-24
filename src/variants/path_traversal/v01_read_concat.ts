import express, { Request, Response } from 'express';
import * as fs from 'fs';
const app = express();
app.get('/f', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  res.send(fs.readFileSync('/var/data/' + name)); // SINK CWE-22
});
export default app;
