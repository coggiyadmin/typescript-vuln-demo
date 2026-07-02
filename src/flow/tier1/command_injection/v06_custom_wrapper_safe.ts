import express from 'express';
import { execFile } from 'child_process';
const app = express();
app.get('/v06', (req, res) => { safeGrep(String(req.query.q ?? '')); res.end('ok'); });
export default app;

function safeGrep(q: string) { execFile('grep', [q, '/var/log/app.log'], () => {}); }
