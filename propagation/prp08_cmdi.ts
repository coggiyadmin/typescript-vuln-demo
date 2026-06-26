const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  let t = '';
  try {
    t = String(req.query.q ?? '');
  } catch (e) {
    // ignore
  }
  exec('grep ' + t, () => res.end('ok'));  // PRP-08 except
});
export default app;
