/** B-tier PAT-PRIV-01 — user flag grants admin role (CWE-269). */
import express, { Request, Response } from 'express';
import session from 'express-session';

const app = express();
app.use(session({ secret: 'dev' }));

app.get('/elevate', (req: Request, res: Response) => {
  if (req.query.admin === '1') {
    (req.session as { role?: string }).role = 'admin'; // SINK CWE-269
  }
  res.end('ok');
});

export default app;
