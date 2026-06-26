// c02 path-sensitivity × nosql (TS parity)
import express, { Request, Response } from 'express';
const app = express();
app.get('/p', (req: Request, res: Response) => {
  const v = String(req.query.v ?? '');
  if (!v.startsWith('safe')) {
    res.end(v); // failure branch still uses tainted v
  } else res.end('ok');
});
export default app;
