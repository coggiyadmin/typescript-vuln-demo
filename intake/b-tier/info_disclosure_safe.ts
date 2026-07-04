/** Safe mirror — PAT-INFO-01 */
import express, { Request, Response } from 'express';

const app = express();

app.get('/debug', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

export default app;
