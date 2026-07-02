import path from 'path';
const ROOT = '/data';
export function read(name: string) {
  const full = path.resolve(ROOT, name);
  if (!full.startsWith(path.resolve(ROOT))) throw new Error('path escape');
  return full;
}
