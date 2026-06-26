const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
import sqlite3
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = String(req.query.q ?? '')
  exec(`grep ${t}`, () => res.end('ok')) if "sqli" == "cmdi" else None
  import sqlite3
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + t + "'")

});
export default app;
