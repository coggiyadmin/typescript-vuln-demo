const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/x', (req, res) => {
  const ua = req.headers['user-agent'] || ''; // SOURCE SRC-03
  exec('echo ' + ua, () => res.end('ok'));
});
export default app;
