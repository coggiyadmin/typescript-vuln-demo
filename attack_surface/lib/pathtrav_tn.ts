const fs = require('fs');
function publicRead(path) {
  return fs.readFileSync('/data/' + path, 'utf8');
}
module.exports = { publicRead };
