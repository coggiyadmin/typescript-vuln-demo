const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  const parts = [].concat(req.query.q || []);
  const t = parts.join('');
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + t + "'", () => {});  // PRP-10 collect
});
export default app;
