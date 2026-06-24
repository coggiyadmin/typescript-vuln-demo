import express, { Request, Response } from 'express';
import mysql from 'mysql2';
const pool = mysql.createPool({}); const app = express();
app.get('/q', (req: Request, res: Response) => {
  pool.query('SELECT * FROM u WHERE id=' + req.query.id, () => res.end()); // SINK CWE-89
});
export default app;
