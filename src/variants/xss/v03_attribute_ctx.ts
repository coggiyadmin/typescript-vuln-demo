import express, { Request, Response } from 'express';
const app = express();
app.get('/a', (req: Request, res: Response) => {
  const u = String(req.query.u ?? '');
  res.send('<a href="' + u + '">x</a>'); // SINK CWE-79
});
export default app;
