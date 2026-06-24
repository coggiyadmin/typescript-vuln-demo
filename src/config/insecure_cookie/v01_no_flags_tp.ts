import { Response } from 'express';
export function setSession(res: Response, sid: string) {
  res.cookie('SESSIONID', sid, { secure: false, httpOnly: false }); // SINK CWE-614
}
