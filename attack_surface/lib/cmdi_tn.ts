const { exec } = require('child_process');
function publicRun(userSupplied) {
  exec('grep ' + userSupplied, () => {}); // TN — no HTTP entry
}
module.exports = { publicRun };
