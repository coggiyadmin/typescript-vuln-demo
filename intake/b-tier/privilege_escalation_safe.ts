/** Safe mirror — PAT-PRIV-01 */
import express, { Request, Response } from 'express';
import session from 'express-session';

const app = express();
app.use(session({ secret: 'dev' }));

app.get('/elevate', (req: Request, res: Response) => {
  if (!(req.session as { isStaff?: boolean }).isStaff) {
    return res.status(403).end('forbidden');
  }
  (req.session as { role?: string }).role = 'admin';
  res.end('ok');
});

export default app;
