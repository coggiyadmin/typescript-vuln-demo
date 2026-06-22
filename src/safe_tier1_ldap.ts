// SAFE mirror — strict allowlist on the uid before building the filter. ZERO findings.
import express, { Request, Response } from 'express';
import { Client } from 'ldapts';
const app = express();
const client = new Client({ url: 'ldap://localhost' });
app.get('/lookup', (req: Request, res: Response) => {
  const uid = String(req.query.uid ?? '');
  if (!/^[a-zA-Z0-9_]+$/.test(uid)) { res.status(400).end(); return; }
  const filter = '(uid=' + uid + ')';
  client.search('dc=example,dc=com', { filter }).then((r) => res.json(r.searchEntries));
});
export default app;
