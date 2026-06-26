const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const t = req.query ? String(req.query.q ?? '') : '';
  res.send('<p>' + t + '</p>');  // PRP-07 optional
});
export default app;
