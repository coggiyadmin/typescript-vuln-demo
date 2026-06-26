const express = require('express');
const app = express();
class Box {}
app.get('/x', (req, res) => {
  const b = new Box();
  b.t = String(req.query.q ?? '');
  res.send('<p>' + b.t + '</p>');  // PRP-04 field
});
export default app;
