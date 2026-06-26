const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const raw = String(req.query.q ?? '');
  const t = raw; // sanitized copy ignored
  exec('grep ' + raw, () => res.end('ok')); // SAN-03 alias hop TP
});
module.exports = app;
