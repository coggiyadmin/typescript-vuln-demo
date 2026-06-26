const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/q', (req, res) => {
  const n = String(req.query.n ?? '');
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + n + "'", () => res.end('ok'));
});
module.exports = app;
