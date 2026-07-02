const { exec } = import * as _ from 'child_process');
function handle(req) { exec('echo ' + req.payload, () => {}); }
export default = { handle };
