// c06/c07 sanitizer × pathtrav (TS parity)
import express, { Request, Response } from 'express';
const app = express();
const fake = (s: string) => s;
app.get('/wrong', (req: Request, res: Response) => {
  const v = String(req.query.v ?? '').replace(/</g, '');
  res.end(v);
});
app.get('/fake', (req: Request, res: Response) => {
  res.end(fake(String(req.query.v ?? '')));
});
export default app;
