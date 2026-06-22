// Tier-1 SSRF (CWE-918) — TS per-type probe.
import express, { Request, Response } from 'express';
const app = express();
app.get('/fetch', async (req: Request, res: Response) => {
  const url = String(req.query.url ?? ''); // SOURCE
  const r = await fetch(url);              // SINK (CWE-918): no host allowlist
  res.send(await r.text());
});
export default app;
