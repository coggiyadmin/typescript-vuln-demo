const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');
  exec('grep ' + t + ' /var/log/app.log', () => res.end('ok')); // sanitize AFTER concat TP
});
module.exports = app;
