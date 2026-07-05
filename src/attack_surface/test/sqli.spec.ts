declare const db: any;
describe('query', () => { it('sql', () => { const q = process.env.Q || ''; db.query("SELECT * FROM u WHERE n='" + q + "'"); }); }); // SINK — spec file
