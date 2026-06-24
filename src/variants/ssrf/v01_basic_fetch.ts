import express, { Request, Response } from 'express';
const app = express();
app.get('/f', async (req: Request, res: Response) => {
  const r = await fetch(String(req.query.url ?? '')); res.send(await r.text()); // SINK CWE-918
});
export default app;
