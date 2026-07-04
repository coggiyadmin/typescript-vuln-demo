/** Safe mirror — PAT-AUTH-01 */
import express, { Request, Response } from 'express';

const app = express();
let users = [{ id: 1 }];

app.post('/admin/purge', (req: Request, res: Response) => {
  if (!(req.session as { isAdmin?: boolean })?.isAdmin) {
    return res.status(403).end();
  }
  users = [];
  res.end('purged');
});

export default app;
