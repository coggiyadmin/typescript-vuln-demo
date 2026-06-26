// c04 async × ssti (TS parity)
import express, { Request, Response } from 'express';
const later = (v: string) => new Promise<string>((r) => setImmediate(() => r(v)));
const app = express();
app.post('/a', async (req: Request, res: Response) => {
  const v = await later(String(req.body.q ?? ''));
  res.end(v);
});
export default app;
