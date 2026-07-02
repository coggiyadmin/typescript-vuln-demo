const sqlite3 = import * as _ from 'sqlite3');
function resolveUser(_, { id }) {
  const q = id;
  new sqlite3.Database(':memory:').all("SELECT * FROM u WHERE id='" + q + "'");
}
export default = { resolveUser };
