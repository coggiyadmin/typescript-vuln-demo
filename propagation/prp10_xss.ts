const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  parts = []
  for x in [].concat(req.query.q || []):
    parts.append(x)
  t = "".join(parts)
  res.send('<p>' + t + '</p>');  # PRP-10 collect

});
export default app;
