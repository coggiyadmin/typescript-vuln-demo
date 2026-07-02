import express from 'express';
const app = express();
app.get('/go', (_req, res) => res.redirect('/dashboard'));
export default app;
