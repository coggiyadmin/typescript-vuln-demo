// SQLi variant: Sequelize raw query with string concat.
import express, { Request, Response } from 'express';
import { Sequelize } from 'sequelize';
const app = express();
const sequelize = new Sequelize('sqlite::memory:');
app.get('/r', async (req: Request, res: Response) => {
  const role = String(req.query.role ?? '');
  await sequelize.query(`SELECT * FROM users WHERE role='${role}'`); // SINK CWE-89
  res.end('ok');
});
export default app;
