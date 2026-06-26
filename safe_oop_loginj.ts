// safe mirror — OOP × loginj (TS)
import express, { Request, Response } from 'express';
const ALLOWED = new Set(['daily']);
const app = express();
class Holder {
  constructor(public v: string) {}
  run() { if (!ALLOWED.has(this.v)) throw new Error('bad'); }
}
app.get('/s', (req: Request, res: Response) => { new Holder(String(req.query.q ?? '')).run(); res.end('ok'); });
export default app;
