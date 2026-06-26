// c05 OOP × loginj (TS parity)
import express, { Request, Response } from 'express';
import console from 'console';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { console.log('user=' + this.fieldline) }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
