// v10 allowlist-set — encode after set membership gate.
const SAFE_NAMES = new Set<string>(['alice', 'bob']);
function esc(s: string): string {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c));
}
export function greet(name: string): string {
  if (SAFE_NAMES.has(name)) return `<p>Hello ${esc(name)}</p>`;
  return '<p>unknown</p>';
}
