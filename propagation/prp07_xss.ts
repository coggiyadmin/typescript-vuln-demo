const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = (request.args.get("q") or "") if request.args else ""
  res.send('<p>' + t + '</p>');  # PRP-07

});
export default app;
