import express from 'express';
const app = express();
app.get('/loc', (req, res) => {
  res.set('Location', String(req.query.url ?? '')); // SINK CWE-601
  res.status(302).end();
});
export default app;
