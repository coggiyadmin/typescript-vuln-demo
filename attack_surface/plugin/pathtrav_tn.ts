const fs = require('fs');
function pluginRead(path) {
  return fs.readFileSync('/data/' + path, 'utf8');
}
module.exports = { pluginRead };
