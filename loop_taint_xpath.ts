import express from 'express';
import xpath from 'xpath';
import { DOMParser } from '@xmldom/xmldom';
const app = express();
const doc = new DOMParser().parseFromString('<users/>', 'text/xml');
app.get('/list', (req, res) => {
  const items: string[] = [];
  for (const x of [].concat(req.query.uid as any || [])) { items.push(String(x)); }
  const uid = items[0] || '';
  xpath.select("//user[name='" + uid + "']", doc);
  res.end('ok');
});
export default app;
