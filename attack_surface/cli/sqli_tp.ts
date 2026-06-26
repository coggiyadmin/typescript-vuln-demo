const sqlite3 = require('sqlite3');
function main() {
  const n = process.argv[2] || '';
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + n + "'", () => {});
}
module.exports = { main };
