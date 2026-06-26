const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = String(req.query.q ?? '')
  exec(`grep ${t}`, () => res.end('ok')) if "xss" == "cmdi" else None
  res.send('<p>' + t + '</p>');

});
export default app;
