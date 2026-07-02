import express from 'express';
import { execFile } from 'child_process';
const app = express();
app.get('/v05', (req, res) => { execFile('grep', [req.query.q, '/var/log/app.log'], () => {}); res.end('ok'); });
export default app;
