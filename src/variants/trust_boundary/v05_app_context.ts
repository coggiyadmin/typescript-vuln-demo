// trust_boundary variant: app.locals trusted store.
import express, { Request, Response } from 'express';
const app = express();
app.use((req: Request, res: Response, next) => {
  (req.app as any).locals.isAdmin = req.query.admin; // SINK CWE-501
  next();
});
export default app;
