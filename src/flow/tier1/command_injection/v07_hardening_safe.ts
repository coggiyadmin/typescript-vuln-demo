import express from 'express';
import { execFile } from 'child_process';
const app = express();
app.get('/v07', (req, res) => { const q=String(req.query.q??''); if(!/^[a-zA-Z0-9_-]+$/.test(q)) return res.end(); execFile('grep', [q, '/var/log/app.log'], () => {}); res.end('ok'); });
export default app;
