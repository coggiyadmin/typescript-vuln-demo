const ALLOWED = new Set<string>(['app.example.com']);
export function redirectSafe(next: string): string {
  const host = new URL(next, 'https://x').hostname;
  if (ALLOWED.has(host)) return next;
  return '/home';
}
