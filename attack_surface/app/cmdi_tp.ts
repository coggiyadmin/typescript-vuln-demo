const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/run', (req, res) => {
  const q = String(req.query.q ?? ''); // SOURCE app entry
  exec('grep ' + q, () => res.end('ok')); // SINK CWE-78
});
module.exports = app;
