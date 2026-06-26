const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  const t = req.query ? String(req.query.q ?? '') : '';
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + t + "'", () => {});  // PRP-07 optional
});
export default app;
