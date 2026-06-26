import express, { Request, Response } from 'express';
const app = express(); const ALLOWED = new Set(['api.internal.example.com']);
app.get('/f', async (req: Request, res: Response) => {
  const u = new URL(String(req.query.url ?? ''));
  if (!ALLOWED.has(u.hostname)) return res.status(403).end('forbidden');
  const r = await fetch(u.href); res.send(await r.text());
});
export default app;
