const { exec } = require('child_process');
function onMessage(payload) {
  const q = payload.body || ''; // SOURCE SRC-12
  exec('echo ' + q, () => {});
}
module.exports = { onMessage };
