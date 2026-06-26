const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '').replace(/</g, '');
  exec('grep ' + t, () => res.end('ok')); // SAN-05 partial strip TP
});
module.exports = app;
