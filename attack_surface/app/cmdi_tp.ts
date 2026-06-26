const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
app.get("/run")
(req, res) => {
    q = req.query("q", "")  # SOURCE app entry
    exec('grep ' + q, () => res.end('ok'))  # SINK CWE-78

module.exports = app;
