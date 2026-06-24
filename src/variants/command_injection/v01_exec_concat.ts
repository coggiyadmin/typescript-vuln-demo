import express, { Request, Response } from 'express';
import { exec } from 'child_process';
const app = express();
app.get('/c', (req: Request, res: Response) => { exec('grep ' + req.query.q, () => res.end()); }); // SINK CWE-78
export default app;
