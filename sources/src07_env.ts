const { exec } = require('child_process');
function main() {
  const v = process.env.TARGET || ''; // SOURCE SRC-07
  exec('echo ' + v, () => {});
}
module.exports = { main };
