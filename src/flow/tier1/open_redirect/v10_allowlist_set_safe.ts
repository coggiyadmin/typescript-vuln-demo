// v10 allowlist-set — prefix array gate before redirect.
import express, { Request, Response } from 'express';
const ALLOWED_PREFIXES = ['https://app.example.com/', 'https://cdn.example.com/'];
const app = express();
app.get('/go', (req: Request, res: Response) => {
  const nxt = String(req.query.next ?? '');
  if (ALLOWED_PREFIXES.some(p => nxt.startsWith(p))) res.redirect(nxt);
  else res.redirect('/home');
});
export default app;
