// Phase-3 parameterize mirror — bound params / prepared API
import express, { Request, Response } from 'express';
const app = express();
app.post('/r', express.json(), (req: Request, res: Response) => {
  res.json({ ok: true });
});
export default app;
