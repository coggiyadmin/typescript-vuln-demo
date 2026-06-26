const express = require('express');
const { exec } = require('child_process');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = String(req.query.q ?? '')
    exec("grep " + t + " /var/log/app.log", () => res.end('ok'))  # SAN-01 sanitize AFTER concat → TP

});
module.exports = app;
