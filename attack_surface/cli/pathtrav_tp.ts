const fs = require('fs');
function main() {
  fs.readFileSync('/data/' + (process.argv[2] || ''), 'utf8');
}
module.exports = { main };
