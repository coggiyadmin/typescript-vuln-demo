import express, { Request, Response } from 'express';
const app = express();
app.get('/e', (req: Request, res: Response) => { res.send(String(eval(String(req.query.x ?? '')))); }); // SINK
export default app;
