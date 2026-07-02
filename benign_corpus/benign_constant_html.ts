import express from 'express';
const app = express();
app.get('/', (_req, res) => res.type('html').send('<html><body><p>Hello</p></body></html>'));
export default app;
