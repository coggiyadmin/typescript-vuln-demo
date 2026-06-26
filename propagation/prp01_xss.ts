const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
app = Flask(__name__)
app.get('/x', (req, res) => {
  return "<p>" + String(req.query.q ?? '') + "</p>"  # PRP-01 inline

});
export default app;
