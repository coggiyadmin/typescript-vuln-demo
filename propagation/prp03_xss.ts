const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const payload = { q: String(req.query.q ?? '') };
  const t = payload.q;
  res.send('<p>' + t + '</p>');  // PRP-03 destructure
});
export default app;
