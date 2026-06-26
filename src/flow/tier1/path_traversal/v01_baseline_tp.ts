import express, { Request, Response } from 'express';
import fs from 'fs';
const app = express();
app.get('/r', (req: Request, res: Response) => {
  res.send(fs.readFileSync('/data/' + String(req.query.p ?? ''), 'utf8')); // SINK
});
export default app;
