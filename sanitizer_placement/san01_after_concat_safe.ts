const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = String(req.query.q ?? '')
    safe = encodeURIComponent(t)
    exec("grep " + safe + " /var/log/app.log", () => res.end('ok'))  # SAN-01 BEFORE → safe

});
module.exports = app;
