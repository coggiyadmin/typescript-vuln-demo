/** SAFE mirror — bounded read. */
import fs from 'fs';

export async function processLog(path: string): Promise<string[]> {
  const stream = fs.createReadStream(path, { highWaterMark: 4096 });
  const lines: string[] = [];
  for await (const chunk of stream) lines.push(String(chunk));
  return lines.slice(0, 1000);
}
