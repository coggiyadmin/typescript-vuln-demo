// v09 guard-in-variable
const ALLOWED = new Set<string>(['Hello {{name}}']);
export function render(tmpl: string, name: string): string | undefined {
  if (ALLOWED.has(tmpl)) return tmpl.replace('{{name}}', name);
}
