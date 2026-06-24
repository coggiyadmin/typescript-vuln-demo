import express, { Request, Response } from 'express';
import { Client } from 'ldapts';
const app = express(); const client = new Client({ url: 'ldap://localhost' });
app.get('/l', (req: Request, res: Response) => {
  const uid = String(req.query.uid ?? '');
  const filter = '(uid=' + uid + ')'; // SINK CWE-90
  client.search('dc=example,dc=com', { filter }).then(() => res.end());
});
export default app;
