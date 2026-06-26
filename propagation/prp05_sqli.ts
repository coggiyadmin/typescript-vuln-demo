const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '').slice(0, 999);
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + t + "'", () => {});  // PRP-05 slice
});
export default app;
