import { Response } from 'express';
export function setSession(res: Response, sid: string) {
  res.cookie('SESSIONID', sid, { secure: true, httpOnly: true, sameSite: 'lax' });
}
