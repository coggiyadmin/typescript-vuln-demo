// c11 fanout × xxe (TS parity)
import express, { Request, Response } from 'express';
const app = express();
app.get('/f', (req: Request, res: Response) => {
  const u = String(req.query.u ?? '');
  res.end(u); // sink 1
  console.log(u); // sink 2
});
export default app;
