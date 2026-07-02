// Phase-3 validate mirror — allowlist/regex gate before sink
import express, { Request, Response } from 'express';
const app = express();
app.get('/s', (req: Request, res: Response) => {
  const q = String(req.query.q ?? '').replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] as Record<string,string>)[c]);
  res.send('<h1>' + q + '</h1>');
});
export default app;
