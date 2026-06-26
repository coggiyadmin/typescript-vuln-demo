const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const parts = [].concat(req.query.q || []);
  const t = parts.join('');
  exec('grep ' + t, () => res.end('ok'));  // PRP-10 collect
});
export default app;
