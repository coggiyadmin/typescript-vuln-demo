// SAFE — stream-based read intent.
import fs from 'fs';
export function load(path: string): fs.ReadStream {
  return fs.createReadStream(path, { encoding: 'utf8' });
}
