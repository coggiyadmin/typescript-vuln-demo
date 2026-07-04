/** B-tier PAT-TRUST-01 — client-supplied role stored in session (CWE-501). */
import express, { Request, Response } from 'express';
import session from 'express-session';

const app = express();
app.use(session({ secret: 'dev' }));

app.get('/role', (req: Request, res: Response) => {
  (req.session as { role?: string }).role = String(req.query.role ?? ''); // SINK CWE-501
  res.end('ok');
});

export default app;
