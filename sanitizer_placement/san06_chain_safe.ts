const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');, html
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = String(req.query.q ?? '')
    t = html.escape(t)
    t = encodeURIComponent(t)
    exec("grep " + t + " /var/log/app.log", () => res.end('ok'))  # SAN-06 chain

});
module.exports = app;
