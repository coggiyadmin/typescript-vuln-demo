const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
class Box {}
app.get('/x', (req, res) => {
  const b = new Box();
  b.t = String(req.query.q ?? '');
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + b.t + "'", () => {});  // PRP-04 field
});
export default app;
