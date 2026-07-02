// Phase-3 validate mirror — allowlist/regex gate before sink
import express, { Request, Response } from 'express';
const app = express();
app.post('/r', express.json(), (req: Request, res: Response) => {
  res.json({ ok: true });
});
export default app;
