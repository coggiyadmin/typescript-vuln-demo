const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  payload = {"q": String(req.query.q ?? '')}
  (t,) = (payload["q"],)
  res.send('<p>' + t + '</p>');  # PRP-03

});
export default app;
