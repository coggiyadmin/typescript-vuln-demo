const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const q = String(req.query.q ?? ''); // SOURCE SRC-01
  exec('grep ' + q, () => res.end('ok')); // SINK CWE-78
});
export default app;
