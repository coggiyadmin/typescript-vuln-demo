// trust_boundary variant: express-session store.
import express, { Request, Response } from 'express';
import session from 'express-session';
const app = express();
app.use(session({ secret: 'dev' }));
app.get('/role', (req: Request, res: Response) => {
  (req.session as any).role = req.query.role; // SINK CWE-501
  res.end();
});
export default app;
