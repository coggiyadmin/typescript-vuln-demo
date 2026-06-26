const express = require('express');
const session = require('express-session');
const app = express();
app.use(session({ secret: 'x' }));
app.get('/show', (req, res) => {
  const v = req.session.msg || ''; // SOURCE SRC-10
  res.send('<p>' + v + '</p>');
});
export default app;
