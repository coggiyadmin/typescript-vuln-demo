const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
import sqlite3
app = Flask(__name__)
app.get('/x', (req, res) => {
  parts = []
  for x in [].concat(req.query.q || []):
    parts.append(x)
  t = "".join(parts)
  import sqlite3
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + t + "'")  # PRP-10 collect

});
export default app;
