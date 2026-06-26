const sqlite3 = require('sqlite3');
function publicQuery(name) {
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE n='" + name + "'", () => {});
}
module.exports = { publicQuery };
