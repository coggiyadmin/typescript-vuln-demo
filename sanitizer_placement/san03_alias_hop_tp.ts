const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = encodeURIComponent(String(req.query.q ?? ''))
    u = t
    exec("grep " + String(req.query.q ?? ''), () => res.end('ok'))  # SAN-03 alias hop ignores sanitize

});
module.exports = app;
