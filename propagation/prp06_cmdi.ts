const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');
  exec(`grep ${t}`, () => res.end('ok'));  // PRP-06 template
});
export default app;
