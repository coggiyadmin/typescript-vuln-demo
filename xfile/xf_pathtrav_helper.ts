// xfile SINK — pathtrav
export async function sink(v: string): Promise<string> {
  return v; // CWE sink in cross-file boundary
}
