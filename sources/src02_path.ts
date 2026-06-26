const express = require('express');
const { exec } = require('child_process');
const app = express();
app.get('/user/:uid', (req, res) => {
  exec('id ' + req.params.uid, () => res.end('ok')); // SOURCE SRC-02 path
});
export default app;
