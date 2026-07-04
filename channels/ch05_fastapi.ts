import express, { Request, Response } from 'express';
import axios from 'axios';
const app = express();
app.get('/proxy', async (req: Request, res: Response) => {
  const r = await axios.get(String(req.query.url ?? '')); // SINK CWE-918
  res.send(r.data);
});
export default app;
