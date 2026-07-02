import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const app = express(); const prisma = new PrismaClient();
app.get('/q', async (req: Request, res: Response) => {
  const name = String(req.query.name ?? '');
  await prisma.$queryRawUnsafe('SELECT * FROM users WHERE name = ' + name); // SINK CWE-943
  res.end('ok');
});
export default app;
