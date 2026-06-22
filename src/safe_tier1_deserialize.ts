// SAFE mirror — plain JSON.parse (data only, no function/RCE gadget). ZERO findings.
import express, { Request, Response } from 'express';
const app = express();
app.post('/restore', express.text(), (req: Request, res: Response) => {
  const obj = JSON.parse(req.body); // data only — no code execution path
  res.json(obj);
});
export default app;
