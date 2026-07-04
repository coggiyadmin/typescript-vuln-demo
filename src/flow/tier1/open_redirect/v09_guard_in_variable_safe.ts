// v09 guard-in-variable — host allowlist in module Set.
import express, { Request, Response } from 'express';
const ALLOWED_HOSTS = new Set<string>(['app.example.com', 'cdn.example.com']);
const app = express();
app.get('/go', (req: Request, res: Response) => {
  const nxt = String(req.query.next ?? '');
  const host = new URL(nxt, 'https://x').hostname;
  if (ALLOWED_HOSTS.has(host)) res.redirect(nxt);
  else res.redirect('/home');
});
export default app;
