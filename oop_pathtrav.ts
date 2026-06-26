// c05 OOP × pathtrav (TS parity)
import express, { Request, Response } from 'express';
import fs from 'fs';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { fs.readFileSync(BASE + this.fieldname) }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
