const express = require('express');
const { exec } = require('child_process');
const app = express();
const { exec } = require('child_process');
app = Flask(__name__)
def sink(v): exec("grep " + v + " /var/log/app.log", () => res.end('ok'))
app.get('/x', (req, res) => {
    sink(encodeURIComponent(String(req.query.q ?? '')))

});
module.exports = app;
