const sqlite3 = require('sqlite3');
function handle(raw) {
  const obj = JSON.parse(raw); // SOURCE SRC-11
  const q = obj.q || '';
  new sqlite3.Database(':memory:').all("SELECT * FROM t WHERE n='" + q + "'");
}
module.exports = { handle };
