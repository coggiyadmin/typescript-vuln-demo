const express = require('express');
const { exec } = require('child_process');
const app = express();
function wrap(x) { return x; }
app.get('/x', (req, res) => {
  const t = wrap(String(req.query.q ?? ''));
  exec('grep ' + t, () => res.end('ok')); // SAN-02 fake wrapper TP
});
module.exports = app;
