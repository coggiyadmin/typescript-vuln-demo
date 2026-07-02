// Phase-3 parameterize mirror — bound params / prepared API
import express, { Request, Response } from 'express';
import ejs from 'ejs';
const app = express();
app.get('/hello', (req: Request, res: Response) => {
  res.send(ejs.render('Hello <%= n %>', { n: String(req.query.n ?? '') }));
});
export default app;
