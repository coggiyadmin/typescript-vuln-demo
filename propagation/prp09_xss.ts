const express = require('express');
const app = express();
const CACHE = {};
app.get('/a', (req, res) => {
  CACHE.v = String(req.query.q ?? '');
  res.end('ok');
});
app.get('/b', (req, res) => {
  const t = CACHE.v || '';
  res.send('<p>' + t + '</p>');  // PRP-09 stored2
});
export default app;
