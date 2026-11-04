import { spawnSync } from 'child_process';
import express from 'express';
const app = express();
app.get('/run', (req, res) => {
  const userCmd = req.query.cmd as string;
  spawnSync('git', ['log', '--', userCmd]);
  res.send('ok');
});
