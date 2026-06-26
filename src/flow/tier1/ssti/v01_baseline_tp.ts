import express, { Request, Response } from 'express';
import ejs from 'ejs';
const app = express();
app.get('/hello', (req: Request, res: Response) => {
  res.send(ejs.render('Hello <%= ' + String(req.query.n ?? '') + ' %>')); // SINK CWE-1336
});
export default app;
