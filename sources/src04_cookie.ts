const express = require('express');
const app = express();
app.get('/x', (req, res) => {
  const v = req.cookies?.pref || ''; // SOURCE SRC-04
  res.send('<p>' + v + '</p>'); // SINK CWE-79
});
export default app;
