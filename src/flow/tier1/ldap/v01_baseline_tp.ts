import express, { Request, Response } from 'express';
import ldap from 'ldapjs';
const app = express(); const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req: Request, res: Response) => {
  const filter = '(uid=' + String(req.query.uid ?? '') + ')'; // SINK CWE-90
  client.search('dc=example,dc=com', { filter }, () => res.end());
});
export default app;
