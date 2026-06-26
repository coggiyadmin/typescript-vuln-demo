const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  let t = '';
  try {
    t = String(req.query.q ?? '');
  } catch (e) {
    // ignore
  }
  res.send('<p>' + t + '</p>');  // PRP-08 except
});
export default app;
