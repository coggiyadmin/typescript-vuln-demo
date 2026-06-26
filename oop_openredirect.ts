// c05 OOP × openredirect (TS parity)
import express, { Request, Response } from 'express';
import express from 'express';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { res.redirect(this.fieldtarget) }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
