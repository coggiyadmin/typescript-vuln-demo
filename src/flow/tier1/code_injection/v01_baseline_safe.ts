import express, { Request, Response } from 'express';
const app = express(); const ALLOWED = new Set(['0','1','2']);
app.get('/e', (req: Request, res: Response) => {
  const x = String(req.query.x ?? '');
  if (!ALLOWED.has(x)) return res.status(403).end();
  res.send(String(eval(x)));
});
export default app;
