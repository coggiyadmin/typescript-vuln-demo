const express = require('express');
const { exec } = require('child_process');
const app = express();
function sink(v) { exec('grep ' + v, () => {}); }
app.get('/x', (req, res) => {
  sink(String(req.query.q ?? '')); // SAN-07 callee TP
  res.end('ok');
});
module.exports = app;
