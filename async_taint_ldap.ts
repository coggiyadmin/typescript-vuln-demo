import express from 'express';
import ldap from 'ldapjs';
const app = express();
const client = ldap.createClient({ url: 'ldap://localhost' });
app.get('/async', async (req, res) => {
  const uid = await Promise.resolve(String(req.query.uid ?? ''));
  client.search('dc=example,dc=com', { filter: '(uid=' + uid + ')' }, () => {});
  res.end('ok');
});
export default app;
