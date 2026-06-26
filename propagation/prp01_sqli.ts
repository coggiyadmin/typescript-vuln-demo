const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
app.get('/x', (req, res) => {
  new sqlite3.Database(":memory:").all("SELECT * FROM u WHERE n='" + String(req.query.q ?? '') + "'", () => {});  // PRP-01 inline
});
export default app;
