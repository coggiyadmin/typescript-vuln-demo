// IL-1 polyglot — SAFE mirror of interop_html_template_literal.ts.
// The untrusted value is written via textContent (not innerHTML), so it is set as
// text and never parsed as HTML. ZERO security findings expected.
export function render(location: Location): void {
  const name = new URLSearchParams(location.search).get('name') ?? ''; // SOURCE
  const out = document.getElementById('out');
  if (out) {
    // Safe: textContent assigns the value as text — no HTML parsing, no XSS.
    out.textContent = `Hello ${name}`;
  }
}
