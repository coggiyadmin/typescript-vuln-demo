import express from 'express';
import ldap from 'ldapjs';
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/list', (req, res) => {
  const items: string[] = [];
  for (const x of [].concat(req.query.uid as any || [])) { items.push(String(x)); }
  const uid = items[0] || '';
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {});
  res.end('ok');
});
export default app;
