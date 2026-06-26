// c13 encoded × loginj (TS parity)
import express, { Request, Response } from 'express';
const app = express();
app.get('/e', (req: Request, res: Response) => {
  const raw = String(req.query.d ?? '');
  const dec = Buffer.from(raw, 'base64').toString('utf8');
  res.end(dec);
});
export default app;
