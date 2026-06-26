const express = require('express');
const { exec } = require('child_process');
const app = express();
import subprocess
app = Flask(__name__)
def wrap(x): return x  # fake wrapper — not a sanitizer
app.get('/x', (req, res) => {
    t = wrap(String(req.query.q ?? ''))
    exec("grep " + t, () => res.end('ok'))  # SAN-02 interproc TP

});
module.exports = app;
