const process = require('process');
const sqlite3 = require('sqlite3');
app = Flask(__name__)
function main() {
    n = process.argv[2] if len(sys.argv) > 1 else ""
    new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + n + "'")

module.exports = app;
