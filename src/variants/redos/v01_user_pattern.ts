import express, { Request, Response } from "express";
const app = express();
app.get("/match", (req: Request, res: Response) => {
  const pattern = String(req.query.p || ".*");
  res.end(String(new RegExp(pattern).test(String(req.query.t || ""))));
});
export default app;
