/**
 * SAFE / TN fixture — media transcoding helper that shells out to ffmpeg safely.
 * Uses execFile with an argument array (no shell) and validates the requested
 * file against a fixed media root. The scanner MUST produce ZERO security
 * findings; any command_injection / path_traversal finding is a FALSE POSITIVE.
 */
import { execFile } from 'node:child_process';
import * as path from 'node:path';

const MEDIA_ROOT = '/var/media';
const PRESETS: Record<string, string[]> = {
  '720p': ['-vf', 'scale=-2:720'],
  '480p': ['-vf', 'scale=-2:480'],
};

/** Resolve a user-supplied name under MEDIA_ROOT, rejecting any escape. */
function resolveUnderRoot(name: string): string {
  const resolved = path.resolve(MEDIA_ROOT, name);
  if (resolved !== MEDIA_ROOT && !resolved.startsWith(MEDIA_ROOT + path.sep)) {
    throw new Error('path escapes media root');
  }
  return resolved;
}

export function transcode(name: string, preset: string): Promise<void> {
  const input = resolveUnderRoot(name);
  const presetArgs = PRESETS[preset] ?? PRESETS['480p'];
  const output = input.replace(/\.[^.]+$/, '.out.mp4');

  return new Promise((resolve, reject) => {
    // execFile: args passed as a distinct array — no shell interpretation.
    execFile('ffmpeg', ['-i', input, ...presetArgs, output], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
