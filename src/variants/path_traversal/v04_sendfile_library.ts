import express, { Request, Response } from 'express';
import path from 'path';
const app = express();
app.get('/f', (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  res.sendFile(path.join('/var/data', name)); // SINK CWE-22
});
export default app;
