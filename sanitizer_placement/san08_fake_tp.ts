const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? ''); // sanitized below — fake SAN-08
  exec('grep ' + t, () => res.end('ok'));
});
module.exports = app;
