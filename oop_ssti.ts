// c05 OOP × ssti (TS parity)
import express, { Request, Response } from 'express';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { require('ejs').render('<%= ' + this.fieldtpl + ' %>') }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
