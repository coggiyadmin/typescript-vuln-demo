const express = require('express');
const { exec } = require('child_process');
const app = express();
function sink(v) { exec('grep', [v, '/var/log/app.log'], () => {}); }
app.get('/x', (req, res) => {
  sink(String(req.query.q ?? ''));
  res.end('ok');
});
module.exports = app;
