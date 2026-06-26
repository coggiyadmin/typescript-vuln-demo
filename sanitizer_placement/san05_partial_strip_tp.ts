const express = require('express');
const { exec } = require('child_process');
const app = express();
import subprocess
app = Flask(__name__)
app.get('/x', (req, res) => {
    t = String(req.query.q ?? '').replace("<", "")
    exec("grep " + t, () => res.end('ok'))  # SAN-05 partial strip

});
module.exports = app;
