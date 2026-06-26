const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = String(req.query.q ?? '')[0:999]
  exec('grep ' + t, () => res.end('ok'))  # PRP-05 slice

});
export default app;
