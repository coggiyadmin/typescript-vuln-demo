import express from 'express';
const app = express();
app.get('/async', async (req, res) => {
  const uid = await Promise.resolve(String(req.query.uid ?? ''));
  JSON.parse(uid); // deser sink shape
  res.end('ok');
});
export default app;
