const express = require('express');
const { exec } = require('child_process');
const app = express();
class Box {}
app.get('/x', (req, res) => {
  const b = new Box();
  b.t = String(req.query.q ?? '');
  exec('grep ' + b.t, () => res.end('ok'));  // PRP-04 field
});
export default app;
