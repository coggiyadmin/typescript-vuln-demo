const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = String(req.query.q ?? '')
    t = encodeURIComponent(t)
    exec("grep " + t + " /var/log/app.log", () => res.end('ok'))

});
module.exports = app;
