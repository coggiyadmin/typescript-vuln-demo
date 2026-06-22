/**
 * FN probe — CWE-79 reflected XSS (TypeScript category probe).
 */
import express, { Request, Response } from 'express';

const app = express();

app.get('/search', (req: Request, res: Response) => {
  const query = req.query.q as string;
  res.send(`<html><body><h1>Search: ${query}</h1></body></html>`);
});
