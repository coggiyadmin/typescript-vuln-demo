const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const CACHE = {};
app.get('/a', (req, res) => {
  CACHE.v = String(req.query.q ?? '');
  res.end('ok');
});
app.get('/b', (req, res) => {
  const t = CACHE.v || '';
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + t + "'", () => {});  // PRP-09 stored2
});
export default app;
