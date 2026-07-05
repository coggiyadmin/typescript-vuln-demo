import * as fs from 'fs';
describe('read', () => { it('path', () => { const q = process.env.Q || ''; fs.readFileSync('/data/' + q); }); }); // SINK — spec file
