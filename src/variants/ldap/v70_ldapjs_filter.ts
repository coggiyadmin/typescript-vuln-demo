import express, { Request, Response } from 'express';
import * as ldap from 'ldapjs';
const app = express();
app.get('/l', (req: Request, res: Response) => {
  const user = String(req.query.user); // SOURCE
  const client = ldap.createClient({ url: 'ldap://localhost' });
  client.search('ou=people', { filter: '(uid=' + user + ')' }, () => {}); // SINK CWE-90
  res.end('ok');
});
