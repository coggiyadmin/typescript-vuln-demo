const express = require('express');
const { exec } = require('child_process');
const sqlite3 = require('sqlite3');
const app = express();
const sqlite3 = require('sqlite3');
app = Flask(__name__)
app.get("/q")
(req, res) => {
    n = req.query("n", "")
    new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + n + "'")

module.exports = app;
