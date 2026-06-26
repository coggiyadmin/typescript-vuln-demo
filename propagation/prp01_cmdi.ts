const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  exec('grep ' + String(req.query.q ?? ''), () => res.end('ok'));  // PRP-01 inline
});
export default app;
