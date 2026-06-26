import express from 'express';
import xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/async', async (req, res) => {
  const uid = await Promise.resolve(String(req.query.uid ?? ''));
  xpath.select("//user[name='" + uid + "']", doc);
  res.end('ok');
});
export default app;
