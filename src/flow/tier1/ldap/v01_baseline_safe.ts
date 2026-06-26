import express, { Request, Response } from 'express';
import ldap from 'ldapjs';
const app = express(); const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/l', (req: Request, res: Response) => {
  const uid = String(req.query.uid ?? '');
  if (!/^[a-zA-Z0-9_-]+$/.test(uid)) return res.status(403).end();
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => res.end());
});
export default app;
