const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
def sanitize(x): return encodeURIComponent(x)
app.get('/x', (req, res) => {
    t = sanitize(String(req.query.q ?? ''))
    exec("grep " + t + " /var/log/app.log", () => res.end('ok'))  # SAN-02 interproc safe

});
module.exports = app;
