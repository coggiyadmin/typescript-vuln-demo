import express, { Request, Response } from 'express';
import * as ejs from 'ejs';
const app = express();
app.get('/s', (req: Request, res: Response) => {
  const tpl = String(req.query.tpl); // SOURCE
  res.send(ejs.render(tpl)); // SINK CWE-94 EJS render user template
});
