const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  let t = String(req.query.q ?? '');
  if (t === 'admin') { t = 'safe'; }
  exec('grep ' + t, () => res.end('ok')); // SAN-04 branch only TP
});
module.exports = app;
