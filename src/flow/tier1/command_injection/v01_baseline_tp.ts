import express, { Request, Response } from 'express';
import { exec } from 'child_process';
const app = express();
app.get('/c', (req: Request, res: Response) => {
  exec('grep ' + String(req.query.q ?? '') + ' /var/log/app.log', () => res.end('ok')); // SINK
});
export default app;
