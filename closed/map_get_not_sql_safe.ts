// cognium-dev#985 — Map.get is not a SQL Connection.get sink
const memoryCache = new Map<string, string>();
export function load(digest: string) {
  return memoryCache.get(digest);
}
