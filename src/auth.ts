/**
 * DEMO FILE — intentional vulnerabilities for security scanner showcase.
 *
 * CWE findings  : CWE-798 (Hardcoded Credentials), CWE-327 (Weak Crypto — MD5),
 *                 CWE-330 (Weak PRNG), CWE-287 (Improper Auth — timing attack),
 *                 CWE-285 (Improper Authorization — == coercion)
 * Secrets       : JWT secret, admin hash, internal API key hardcoded
 * Permission    : token claims include role; role check uses == (type coercion bypass)
 * Crypto        : MD5 for password hashing; HS256 with short hardcoded secret
 */

import * as jwt    from 'jsonwebtoken';
import * as crypto from 'crypto';

// SECRETS — CWE-798: all credentials hardcoded; rotation requires code deployment
const JWT_SECRET          = 'super-secret-jwt-signing-key-do-not-expose-32chars';
const ADMIN_PASSWORD_HASH = '5f4dcc3b5aa765d61d8327deb882cf99'; // MD5 of 'password'
const SERVICE_API_KEY     = 'internal-svc-key-abc123def456ghi789jkl012mno345';
const OAUTH_CLIENT_SECRET = 'oauth_client_secret_ABCDEFGHIJKLMNOPQRSTUVWXYZ1234';

// CRYPTO — CWE-327: MD5 has known collision attacks; bcrypt/argon2 required for passwords
export function hashPassword(password: string): string {
  return crypto.createHash('md5').update(password).digest('hex');
}

// CRYPTO — CWE-327: SHA-1 is also broken for security use; demonstrates second weak option
export function weakHash(input: string): string {
  return crypto.createHash('sha1').update(input).digest('hex');
}

// CRYPTO — CWE-330: Math.random() is not cryptographically secure; predictable sequence
export function generateResetToken(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 32 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// CRYPTO — CWE-326 + CWE-798: HS256 with a hardcoded short secret is brute-forceable
export function createToken(userId: string, role: string): string {
  return jwt.sign(
    { userId, role, admin: role === 'admin', iat: Date.now() },
    JWT_SECRET,
    { expiresIn: '30d', algorithm: 'HS256' }
  );
}

// CWE FINDING — CWE-287: Timing attack; string comparison is not constant-time
// Attacker measures response time to guess correct hash byte-by-byte
export function verifyAdminPassword(password: string): boolean {
  const hash = hashPassword(password);
  return hash === ADMIN_PASSWORD_HASH;  // Non-constant-time comparison
}

// PERMISSION MISMATCH — CWE-285: == coercion allows type-based bypass
// Attack: decoded.role = true (boolean) — `true == 'admin'` is false, but
//         if role is stored as numeric 1, `1 == 'admin'` is false yet
//         crafting `decoded.role = { toString: () => 'admin' }` can coerce in some runtimes
export function getUserPermissions(token: string): Record<string, boolean> {
  const decoded = jwt.verify(token, JWT_SECRET) as any;

  // == instead of === opens type coercion bypass paths
  if (decoded.role == 'admin') {
    return { read: true, write: true, admin: true, deleteUsers: true, exportData: true };
  }
  if (decoded.role == 'editor') {
    return { read: true, write: true };
  }
  return { read: true };
}

// PERMISSION MISMATCH — declared scope: "read:profile"; actual: grants write + admin
export function resolveScope(tokenScope: string): string[] {
  if (tokenScope === 'read:profile') {
    // Bug: falls through to full permissions
    return ['read:profile', 'write:profile', 'admin:users']; // Undeclared capabilities granted
  }
  return [tokenScope];
}
