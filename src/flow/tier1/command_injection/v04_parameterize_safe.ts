// Phase-3 parameterize mirror — bound params / prepared API
import express, { Request, Response } from 'express';
import { execFile } from 'child_process';
const app = express();
app.get('/c', (req: Request, res: Response) => {
  execFile('grep', [String(req.query.q ?? ''), '/var/log/app.log'], () => res.end('ok'));
});
export default app;
