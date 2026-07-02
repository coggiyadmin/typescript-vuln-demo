const { exec } = import * as _ from 'child_process');
function handler(event) { exec('grep ' + (event.q || ''), () => {}); }
export default = { handler };
