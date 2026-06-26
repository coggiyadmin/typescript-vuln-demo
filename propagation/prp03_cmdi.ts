const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const payload = { q: String(req.query.q ?? '') };
  const t = payload.q;
  exec('grep ' + t, () => res.end('ok'));  // PRP-03 destructure
});
export default app;
