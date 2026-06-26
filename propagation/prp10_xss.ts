const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const parts = [].concat(req.query.q || []);
  const t = parts.join('');
  res.send('<p>' + t + '</p>');  // PRP-10 collect
});
export default app;
