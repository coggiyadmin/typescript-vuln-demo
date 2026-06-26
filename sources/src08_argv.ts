const { exec } = require('child_process');
function main() {
  const v = process.argv[2] || ''; // SOURCE SRC-08
  exec('echo ' + v, () => {});
}
module.exports = { main };
