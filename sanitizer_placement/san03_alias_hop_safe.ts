const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');
  const u = t;
  exec('grep', [u, '/var/log/app.log'], () => res.end('ok'));
});
module.exports = app;
