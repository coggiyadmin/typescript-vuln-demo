// Phase-3 encode mirror — contextual encoding before sink
import express, { Request, Response } from 'express';
const app = express();
app.post('/login', express.urlencoded(), (req: Request, res: Response) => {
  console.log(`login user=${req.body.user}`);
  res.end();
});
export default app;
