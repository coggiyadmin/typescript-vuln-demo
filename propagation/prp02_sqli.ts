const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');  // SOURCE
  const u = t;
  const v = u;
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + v + "'", () => {});  // PRP-02 alias
});
export default app;
