const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  let t = '';
  try {
    t = String(req.query.q ?? '');
  } catch (e) {
    // ignore
  }
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + t + "'", () => {});  // PRP-08 except
});
export default app;
