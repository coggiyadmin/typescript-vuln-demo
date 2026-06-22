/**
 * DEMO FILE — FALSE-NEGATIVE runtime probes (TypeScript).
 */
import { execSync } from 'child_process';
import axios, { AxiosRequestConfig } from 'axios';
import * as protobuf from 'protobufjs';

declare const process: { env: Record<string, string | undefined> };

// CWE-78 — git branch interpolated into execSync.
export function wdioSmartSelect(branch: string): string {
  return execSync(
    `git diff --name-only origin/main...${branch} | xargs wdio run --spec`
  ).toString(); // CWE-78
}

// CWE-94 — protobufjs parse() on attacker-supplied schema text.
export function loadProtoSchema(schemaText: string, typeName: string): unknown {
  const root = protobuf.parse(schemaText).root; // CWE-94
  const Message = root.lookupType(typeName);
  return Message;
}

// CWE-400 — fetch adapter path ignores configured size limits.
export async function axiosFetchBypass(url: string, cfg: AxiosRequestConfig): Promise<string> {
  const response = await axios.get(url, {
    ...cfg,
    adapter: 'fetch',
    maxContentLength: 1024,
    maxBodyLength: 1024,
    responseType: 'text',
  });
  return response.data as string; // CWE-400
}

// Semver caret-range trap dependency declared in package.json.
export function resolveCaretTrap(): string {
  return process.env.npm_package_dependencies_caret_trap_lib || '^1.11.21';
}
