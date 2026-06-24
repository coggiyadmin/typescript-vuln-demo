import jwt from 'jsonwebtoken';
export function decode(token: string) {
  return jwt.verify(token, 'ignored', { algorithms: ['none'] }); // SINK CWE-347
}
