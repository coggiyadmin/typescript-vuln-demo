// Cross-file taint — SINK side (SSRF, CWE-918). Imported by
// xf_ssrf_controller.ts; `target` arrives tainted across the file boundary.

export async function fetchUrl(target: string): Promise<string> {
  // SINK (CWE-918): tainted URL fetched with no host allowlist or validation.
  const res = await fetch(target);
  return res.text();
}
