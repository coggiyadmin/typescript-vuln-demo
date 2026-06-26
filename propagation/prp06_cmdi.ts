const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = String(req.query.q ?? '')
  exec(`grep ${t}`, () => res.end('ok'))  # PRP-06 template

});
export default app;
