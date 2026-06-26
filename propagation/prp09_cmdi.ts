const express = require('express');
const { exec } = require('child_process');
const app = express();
const CACHE = {};
app.get('/a', (req, res) => {
  CACHE.v = String(req.query.q ?? '');
  res.end('ok');
});
app.get('/b', (req, res) => {
  const t = CACHE.v || '';
  exec('grep ' + t, () => res.end('ok'));  // PRP-09 stored2
});
export default app;
