import express from 'express';
const app = express();
app.get('/list', (req, res) => {
  const items: string[] = [];
  for (const x of [].concat(req.query.uid as any || [])) { items.push(String(x)); }
  const uid = items[0] || '';
  JSON.parse(uid); // deser sink shape
  res.end('ok');
});
export default app;
