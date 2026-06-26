const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  res.send('<p>' + String(req.query.q ?? '') + '</p>');
});
module.exports = app;
