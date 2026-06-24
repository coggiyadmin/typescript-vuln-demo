import express, { Request, Response } from 'express';
const app = express();
app.get('/go', (req: Request, res: Response) => { res.redirect(String(req.query.next ?? '')); }); // SINK CWE-601
export default app;
