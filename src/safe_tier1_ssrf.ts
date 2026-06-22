// SAFE mirror — SSRF guarded by a host allowlist; response body is not reflected.
// ZERO security findings expected.
import express, { Request, Response } from 'express';
const app = express();
const ALLOWED = new Set(['api.example.com', 'cdn.example.com']);
app.get('/fetch', async (req: Request, res: Response) => {
  const target = String(req.query.url ?? '');
  let u: URL;
  try { u = new URL(target); } catch { res.status(400).end(); return; }
  if (u.protocol !== 'https:' || !ALLOWED.has(u.hostname)) { res.status(403).end(); return; }
  const r = await fetch(u.href, { redirect: 'error' });
  res.json({ ok: r.ok, status: r.status }); // metadata only, body not reflected
});
export default app;
