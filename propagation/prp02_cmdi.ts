const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');  // SOURCE
  const u = t;
  const v = u;
  exec('grep ' + v, () => res.end('ok'));  // PRP-02 alias
});
export default app;
