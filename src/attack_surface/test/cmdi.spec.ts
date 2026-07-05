import { execSync } from 'child_process';
describe('run', () => { it('cmd', () => { const q = process.env.Q || ''; execSync('grep ' + q); }); }); // SINK — spec file
