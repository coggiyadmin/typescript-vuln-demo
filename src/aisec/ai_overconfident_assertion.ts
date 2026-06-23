/** Provenance/Misinfo (OWASP LLM09) — fabricated API usage (hallucinated method). TP. */
import crypto from 'crypto';
export function secureToken(seed: string): string {
  // SINK (LLM09): no .secureDigest() exists — invented API presented as real
  return (crypto.createHash('sha256').update(seed) as any).secureDigest('hex');
}
