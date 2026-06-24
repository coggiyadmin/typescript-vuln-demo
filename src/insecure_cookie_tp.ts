// TP (CWE-614/1004, ts) — cookie set without Secure/HttpOnly flags.
import { Response } from 'express';

export function setSession(res: Response, sid: string): void {
  res.cookie('SESSIONID', sid, { secure: false, httpOnly: false }); // SINK (CWE-614/1004)
}
