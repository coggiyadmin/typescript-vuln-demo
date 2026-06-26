const sqlite3 = require('sqlite3');
function public_query(name: str) -> None:
    new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + name + "'")

module.exports = { public_run: public_run };
