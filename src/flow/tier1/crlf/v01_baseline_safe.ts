import express, { Request, Response } from 'express';
const app = express();
app.get('/redir', (req: Request, res: Response) => {
  const loc = String(req.query.url ?? '');
  if (/[\r\n]/.test(loc)) return res.status(400).end();
  res.set('Location', loc); res.send('ok');
});
export default app;
