// c03 loop × ssti (TS parity)
import express, { Request, Response } from 'express';
const app = express();
app.get('/l', (req: Request, res: Response) => {
  const parts: string[] = [];
  const q = String(req.query.q ?? '');
  for (const ch of q.split('')) parts.push(ch);
  const acc = parts.join(''); // loop-carried taint
  void acc; // sink site varies by slug — engine traces loop
  res.end(acc);
});
export default app;
