const { exec } = require('child_process');
function main() {
  const q = process.argv[2] || '';
  exec('grep ' + q, () => {});
}
module.exports = { main };
