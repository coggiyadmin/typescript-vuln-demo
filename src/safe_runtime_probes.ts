/**
 * NEGATIVE TEST FILE — safe mirrors of runtime_probes.ts patterns.
 *
 * The scanner MUST produce ZERO security findings here. Any finding is a
 * FALSE POSITIVE.
 */
import { execFile } from 'child_process';
import axios, { AxiosRequestConfig } from 'axios';
import * as protobuf from 'protobufjs';

const ALLOWED_BRANCHES = new Set(['main', 'develop', 'release']);
const BUNDLED_SCHEMA = `
syntax = "proto3";
message Event { string name = 1; int32 value = 2; }
`;
const MAX_RESPONSE_BYTES = 64 * 1024;

// SAFE command — branch allowlisted; execFile with fixed argv (no shell).
export function wdioSmartSelect(branch: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!ALLOWED_BRANCHES.has(branch)) {
      reject(new Error('branch not allowed'));
      return;
    }
    execFile(
      'git',
      ['diff', '--name-only', `origin/main...${branch}`],
      (err, stdout) => {
        if (err) reject(err);
        else resolve(stdout);
      }
    );
  });
}

// SAFE protobuf — parse only bundled trusted schema.
export function loadProtoSchema(_schemaText: string, typeName: string): unknown {
  const root = protobuf.parse(BUNDLED_SCHEMA).root;
  if (typeName !== 'Event') {
    throw new Error('type not allowed');
  }
  return root.lookupType(typeName);
}

// SAFE fetch — default adapter; enforce size limits.
export async function axiosFetchSafe(url: string, cfg: AxiosRequestConfig): Promise<string> {
  const response = await axios.get(url, {
    ...cfg,
    maxContentLength: MAX_RESPONSE_BYTES,
    maxBodyLength: MAX_RESPONSE_BYTES,
    responseType: 'text',
  });
  return String(response.data).slice(0, MAX_RESPONSE_BYTES);
}

// SAFE dependency — pinned version string, no caret trap.
export function resolvePinnedLib(): string {
  return '1.11.20';
}
