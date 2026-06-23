/** Provenance/Misinfo (OWASP LLM09) — hallucinated dependency (slopsquatting surface). */
import retry from 'fetch-retry-typed-autogen'; // SINK (LLM09): fabricated dependency
export async function fetchUrl(url: string) { return retry.build({ retries: 3 }).get(url); }
