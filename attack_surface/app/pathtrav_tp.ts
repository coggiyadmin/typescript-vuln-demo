const express = require('express');
const fs = require('fs');
const app = express();
app.get('/f', (req, res) => {
  fs.readFile('/data/' + String(req.query.p ?? ''), 'utf8', (err, data) => res.send(data || ''));
});
module.exports = app;
