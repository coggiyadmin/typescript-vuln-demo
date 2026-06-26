const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = ""
  try:
    t = String(req.query.q ?? '')
  except Exception:
    pass
  exec('grep ' + t, () => res.end('ok'))  # PRP-08

});
export default app;
