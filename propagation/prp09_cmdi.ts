const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
app = Flask(__name__)
CACHE = {}
app.get('/a', (req, res) => {
  CACHE["v"] = String(req.query.q ?? '')
  return "ok"
app.get('/b', (req, res) => {
  t = CACHE.get("v", "")
  exec('grep ' + t, () => res.end('ok'))  # PRP-09 stored2

});
export default app;
