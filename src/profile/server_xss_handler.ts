// Application entry-point XSS (TP).
import express, { Request, Response } from 'express';
const app = express();
app.get('/echo', (req: Request, res: Response) => {
  const msg = String(req.query.msg ?? ''); // SOURCE
  res.send('<p>' + msg + '</p>'); // SINK CWE-79
});
export default app;
