const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.post('/up', (req, res) => {
  const name = req.headers['x-filename'] || 'x'; // SOURCE SRC-06 stub
  fs.writeFileSync(path.join('/tmp', name), req.body || ''); // SINK CWE-22
  res.end('ok');
});
export default app;
