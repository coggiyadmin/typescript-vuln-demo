import express, { Request, Response } from 'express';
const app = express();
app.get('/s', (req: Request, res: Response) => {
  res.send('<h1>' + String(req.query.q ?? '') + '</h1>'); // SINK
});
export default app;
