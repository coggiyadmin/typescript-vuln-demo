// Tier-1 unsafe deserialization (CWE-502) — TS per-type probe.
import express, { Request, Response } from 'express';
import * as nodeSerialize from 'node-serialize';
const app = express();
app.post('/restore', express.text(), (req: Request, res: Response) => {
  const blob = req.body;                  // SOURCE (untrusted serialized payload)
  const obj = nodeSerialize.unserialize(blob); // SINK (CWE-502): RCE via crafted payload
  res.json(obj);
});
export default app;
