// Cross-file taint — SOURCE side (SQL injection, CWE-89).
// Express handler passes user input across the file boundary to the sink in
// xf_sqli_helper.ts. Directory scan required (#106 — TS partial at v3.88.1).
import express, { Request, Response } from 'express';
import { findUser } from './xf_sqli_helper';

const app = express();
app.get('/user', (req: Request, res: Response) => {
  const name = String(req.query.name ?? ''); // SOURCE
  res.json(findUser(name));                   // → sink in helper (CWE-89)
});

export default app;
