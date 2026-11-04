import { spawn } from 'child_process';
import express from 'express';
const app = express();
app.get('/run', (req, res) => {
  const c = req.query.cmd as string;
  spawn('ssh', ['deploy@host', c]);
  res.send('ok');
});
