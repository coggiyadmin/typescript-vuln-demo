// c05 OOP × ldap (TS parity)
import express, { Request, Response } from 'express';
import ldapjs from 'ldapjs';
const app = express();
class Holder {
  constructor(public v: string) { this.v = v; }
  get field() { return this.v; }
  run(res: Response) { client.search('dc=ex', { filter: '(uid=' + this.fielduid + ')' }, () => {}) }
}
app.get('/o', (req: Request, res: Response) => {
  const h = new Holder(String(req.query.q ?? ''));
  h.run(res); res.end('ok');
});
export default app;
