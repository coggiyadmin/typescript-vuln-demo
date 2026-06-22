// SAFE mirror — redirect target resolved to a constant literal, never the tainted
// value. ZERO security findings expected.
import express, { Request, Response } from 'express';
const app = express();
app.get('/go', (req: Request, res: Response) => {
  const next = String(req.query.next ?? '');
  let dest = '/home';
  if (next === 'account') dest = '/account';
  else if (next === 'help') dest = '/help';
  res.redirect(dest); // only constant literals reach redirect()
});
export default app;
