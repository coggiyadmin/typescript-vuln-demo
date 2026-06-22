// Cross-file taint — SOURCE side (SSRF, CWE-918).
// Express handler passes a user-supplied URL across the file boundary to the
// sink in xf_ssrf_helper.ts. Directory scan required (#106 — TS partial at v3.88.1).
import express, { Request, Response } from 'express';
import { fetchUrl } from './xf_ssrf_helper';

const app = express();
app.get('/fetch', async (req: Request, res: Response) => {
  const target = String(req.query.url ?? ''); // SOURCE
  res.send(await fetchUrl(target));            // → sink in helper (CWE-918)
});

export default app;
