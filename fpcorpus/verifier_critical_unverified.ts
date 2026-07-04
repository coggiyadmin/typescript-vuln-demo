// Constant query — verifier must not promote to critical (#122).
export function lookup(): string {
  const q = 'SELECT 1';
  return q;
}
