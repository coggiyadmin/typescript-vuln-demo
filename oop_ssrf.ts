// c05 OOP × ssrf (TS parity)
import express, { Request, Response } from 'express';
import http from 'http';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { http.get(this.fieldurl) }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
