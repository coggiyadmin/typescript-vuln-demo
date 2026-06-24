import express, { Request, Response } from 'express';
import * as nodeSerialize from 'node-serialize';
const app = express();
app.post('/r', express.text(), (req: Request, res: Response) => {
  const obj = nodeSerialize.unserialize(req.body); // SINK CWE-502
  res.json(obj);
});
export default app;
