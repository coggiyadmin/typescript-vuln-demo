const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const t = String(req.query.q ?? '').slice(0, 999);
  res.send('<p>' + t + '</p>');  // PRP-05 slice
});
export default app;
