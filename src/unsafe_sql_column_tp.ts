// TP control (CWE-89, ts) — column concatenated from an HTTP source with NO validation. Proves
// the engine fires on the genuine sink, so safe_sql_identifier_quote.ts staying clean means the
// validation guard is credited (not an engine blind spot).
import express from 'express';
const app = express();
app.get('/items', (req, res) => {
  const col = req.query.col as string; // attacker-controlled, NOT validated
  return (globalThis as any).db.query(`SELECT * FROM items WHERE ${col} = 1`); // SINK
});
export { app };
