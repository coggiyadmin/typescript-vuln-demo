const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = (request.args.get("q") or "") if request.args else ""
  exec('grep ' + t, () => res.end('ok'))  # PRP-07

});
export default app;
