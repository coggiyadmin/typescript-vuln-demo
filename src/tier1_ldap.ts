// Tier-1 LDAP injection (CWE-90) — TS per-type probe.
import express, { Request, Response } from 'express';
import { Client } from 'ldapts';
const app = express();
const client = new Client({ url: 'ldap://localhost' });
app.get('/lookup', (req: Request, res: Response) => {
  const uid = String(req.query.uid ?? '');             // SOURCE
  const filter = '(uid=' + uid + ')';                  // SINK (CWE-90): filter injection
  client.search('dc=example,dc=com', { filter }).then((r) => res.json(r.searchEntries));
});
export default app;
