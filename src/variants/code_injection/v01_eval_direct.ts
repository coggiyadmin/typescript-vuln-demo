import express, { Request, Response } from 'express';
const app = express();
app.post('/e', express.text(), (req: Request, res: Response) => { eval(req.body); res.end(); }); // SINK CWE-94
export default app;
