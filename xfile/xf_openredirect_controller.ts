// xfile SOURCE — openredirect
import express, { Request, Response } from 'express';
import { sink } from './xf_openredirect_helper';
const app = express();
app.get('/x', async (req: Request, res: Response) => {
  const v = String(req.query.q ?? '');
  res.send(await sink(v));
});
export default app;
