import express, { Request, Response } from 'express';
const app = express();
app.post('/login', express.urlencoded(), (req: Request, res: Response) => {
  console.log(`login user=${req.body.user} password=${req.body.password}`); // SINK
  res.end();
});
export default app;
