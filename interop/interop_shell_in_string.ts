/** IL-1 polyglot — TypeScript → shell DSL (CWE-78). */
import express from 'express';
import { exec } from 'child_process';

const app = express();

app.get('/run', (req, res) => {
  const arg = String(req.query.arg ?? ''); // SOURCE
  const cmd = 'echo ' + arg; // SINK CWE-78
  exec('sh -c ' + JSON.stringify(cmd), () => {});
  res.end('ok');
});
export default app;
