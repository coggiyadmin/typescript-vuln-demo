const express = require('express');
const { exec } = require('child_process');
const app = express();
function sanitize(x) { return x; }
app.get('/x', (req, res) => {
  const t = sanitize(String(req.query.q ?? ''));
  exec('grep', [t, '/var/log/app.log'], () => res.end('ok'));
});
module.exports = app;
