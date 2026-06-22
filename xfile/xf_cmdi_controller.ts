// Cross-file taint — SOURCE side (command injection, CWE-78).
// Express handler passes user input across the file boundary to the sink in
// xf_cmdi_helper.ts. The scanner MUST trace taint across files on a DIRECTORY
// scan; no finding = FALSE NEGATIVE (cross-file, #106 — TS partial at v3.88.1).
import express, { Request, Response } from 'express';
import { runPing } from './xf_cmdi_helper';

const app = express();
app.get('/ping', (req: Request, res: Response) => {
  const host = String(req.query.host ?? ''); // SOURCE
  runPing(host);                              // → sink in helper (CWE-78)
  res.end();
});

export default app;
