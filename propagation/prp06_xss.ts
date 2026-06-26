const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');
  res.send('<p>' + t + '</p>');  // PRP-06 template
});
export default app;
