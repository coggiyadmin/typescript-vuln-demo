const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  t = String(req.query.q ?? '')[0:999]
  res.send('<p>' + t + '</p>');  # PRP-05 slice

});
export default app;
