// v09 guard-in-variable — tag allowlist held in module variable.
const ALLOWED_TAGS = new Set<string>(['p', 'span']);
export function render(tag: string, text: string): string {
  if (ALLOWED_TAGS.has(tag)) return `<${tag}>${text}</${tag}>`;
  return '<p>blocked</p>';
}
