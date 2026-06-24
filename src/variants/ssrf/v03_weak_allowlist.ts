import express, { Request, Response } from 'express';
const app = express();
app.get('/w', async (req: Request, res: Response) => {
  const url = String(req.query.url ?? '');
  if (url.includes('trusted')) { const r = await fetch(url); res.send(await r.text()); } // SINK CWE-918
});
export default app;
