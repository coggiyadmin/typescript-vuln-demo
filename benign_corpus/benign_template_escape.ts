function esc(s: string) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c));
}
export function render(name: string) { return '<p>' + esc(name) + '</p>'; }
