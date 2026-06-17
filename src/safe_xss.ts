/**
 * SAFE mirror — xss_probe.ts; DOMPurify before HTML render.
 */
import express, { Request, Response } from 'express';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const app = express();
const DOMPurify = createDOMPurify(new JSDOM('').window as unknown as Window);

app.get('/search', (req: Request, res: Response) => {
  const query = req.query.q as string;
  const safe = DOMPurify.sanitize(String(query ?? ''));
  res.send(`<html><body><h1>Search: ${safe}</h1></body></html>`);
});
