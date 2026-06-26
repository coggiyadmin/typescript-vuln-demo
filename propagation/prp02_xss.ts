const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '');  // SOURCE
  const u = t;
  const v = u;
  res.send('<p>' + v + '</p>');  // PRP-02 alias
});
export default app;
