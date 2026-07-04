import express, { Request, Response } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
const app = express();
app.get('/r', (req: Request, res: Response) => {
  const q = String(req.query.q ?? ''); // SOURCE
  const el = React.createElement('div', { dangerouslySetInnerHTML: { __html: q } }); // SINK CWE-79
  res.send(renderToString(el));
});
export default app;
