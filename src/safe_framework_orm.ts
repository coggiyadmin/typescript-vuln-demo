// Framework-idiom benign (WS-5.2) — TypeORM repository lookup that LOOKS risky but
// binds parameters. ZERO findings expected.
import express, { Request, Response } from 'express';
import { DataSource } from 'typeorm';

const ds = new DataSource({ type: 'sqlite', database: ':memory:', entities: [] });
const app = express();

app.get('/u', async (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  // findOneBy binds the criteria object — no raw SQL interpolation.
  const repo = ds.getRepository('User');
  res.json(await repo.findOneBy({ name }));
});
export default app;
