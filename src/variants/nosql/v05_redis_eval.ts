import express, { Request, Response } from 'express';
import Redis from 'ioredis';
const app = express(); const redis = new Redis();
app.get('/eval', (req: Request, res: Response) => {
  const script = String(req.query.script ?? 'return 0');
  redis.eval(script, 0); // SINK CWE-943 Redis EVAL
  res.end('ok');
});
export default app;
