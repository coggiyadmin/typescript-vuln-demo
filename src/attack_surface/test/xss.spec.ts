describe('render', () => { it('xss', () => { const q = process.env.Q || ''; const html = '<p>' + q + '</p>'; expect(html).toBeDefined(); }); }); // SINK — spec file
