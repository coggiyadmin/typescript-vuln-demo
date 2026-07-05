import express, { Request, Response } from 'express';
const app = express();
app.get('/h', (req: Request, res: Response) => {
  res.setHeader('Content-Language', String(req.query.lang)); // SINK CWE-113 header injection
  res.end('ok');
});
