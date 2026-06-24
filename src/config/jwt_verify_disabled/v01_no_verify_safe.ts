import jwt from 'jsonwebtoken';
export function decode(token: string, secret: string) {
  return jwt.verify(token, secret, { algorithms: ['HS256'] });
}
