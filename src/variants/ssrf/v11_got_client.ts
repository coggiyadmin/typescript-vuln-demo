import express, { Request, Response } from 'express';
import got from 'got';
const app = express();
app.get('/fetch', async (req: Request, res: Response) => {
  const body = await got(String(req.query.url ?? '')).text(); // SINK CWE-918 got
  res.send(body);
});
export default app;
