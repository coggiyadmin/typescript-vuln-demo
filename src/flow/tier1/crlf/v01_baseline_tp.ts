import express, { Request, Response } from 'express';
const app = express();
app.get('/redir', (req: Request, res: Response) => {
  res.set('Location', String(req.query.url ?? '')); res.send('ok'); // SINK CWE-93
});
export default app;
