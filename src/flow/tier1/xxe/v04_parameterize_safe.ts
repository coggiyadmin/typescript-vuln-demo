// Phase-3 parameterize mirror — bound params / prepared API
import express, { Request, Response } from 'express';
import { parseString } from 'xml2js';
const app = express();
app.post('/xml', express.raw({ type: '*/*' }), (req: Request, res: Response) => {
  parseString(req.body.toString(), { explicitRoot: false }, () => res.end('ok'));
});
export default app;
