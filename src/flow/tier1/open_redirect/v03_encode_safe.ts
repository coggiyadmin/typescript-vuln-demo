// Phase-3 encode mirror — contextual encoding before sink
import express, { Request, Response } from 'express';
const app = express(); const ALLOWED = new Set(['/dashboard', '/profile', '/settings']);
app.get('/go', (req: Request, res: Response) => {
  const nxt = String(req.query.next ?? '');
  if (!ALLOWED.has(nxt)) return res.status(403).end();
  res.redirect(nxt);
});
export default app;
