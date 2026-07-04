/** Safe mirror — PAT-TRUST-01 */
import express, { Request, Response } from 'express';
import session from 'express-session';

const ALLOWED = new Set(['user', 'viewer']);
const app = express();
app.use(session({ secret: 'dev' }));

app.get('/role', (req: Request, res: Response) => {
  const role = ALLOWED.has(String(req.query.role ?? '')) ? String(req.query.role) : 'user';
  (req.session as { role?: string }).role = role;
  res.end('ok');
});

export default app;
