import express, { Request, Response } from 'express';
import { parseString } from 'xml2js';
const app = express();
app.post('/xml', express.raw({ type: '*/*' }), (req: Request, res: Response) => {
  parseString(req.body.toString(), () => res.end('ok')); // SINK CWE-611
});
export default app;
