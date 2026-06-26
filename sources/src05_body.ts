const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());
app.post('/x', (req, res) => {
  const q = req.body.q || ''; // SOURCE SRC-05
  exec('grep ' + q, () => res.end('ok'));
});
export default app;
