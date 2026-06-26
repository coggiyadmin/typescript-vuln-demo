const { exec } = require('child_process');
function pluginRun(userSupplied) {
  exec('grep ' + userSupplied, () => {}); // TN plugin API
}
module.exports = { pluginRun };
