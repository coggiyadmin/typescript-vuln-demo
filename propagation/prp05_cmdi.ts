const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '').slice(0, 999);
  exec('grep ' + t, () => res.end('ok'));  // PRP-05 slice
});
export default app;
