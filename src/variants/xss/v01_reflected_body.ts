// XSS variant: reflected HTML body.
import express, { Request, Response } from 'express';
const app = express();
app.get('/s', (req: Request, res: Response) => {
  const q = String(req.query.q ?? ''); res.send('<h1>' + q + '</h1>'); // SINK CWE-79
});
export default app;
