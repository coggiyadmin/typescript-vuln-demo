const express = require('express');
const app = express();
const DB = { '1': '<img onerror=alert(1)>' };
app.get('/show', (req, res) => {
  const row = DB[req.query.id] || ''; // SOURCE SRC-09
  res.send(row); // SINK
});
export default app;
