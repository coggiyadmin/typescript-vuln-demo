/** SAFE mirror — execFile with argv, no shell. */
import express from 'express';
import { execFile } from 'child_process';

const app = express();

app.get('/run', (req, res) => {
  const arg = String(req.query.arg ?? '');
  execFile('echo', ['--', arg], () => {});
  res.end('ok');
});
export default app;
