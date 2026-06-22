// IL-1 polyglot — TypeScript → HTML (CWE-79).
// Host (TS) assembles a guest-language (HTML) fragment in a template literal from
// untrusted input and assigns it to innerHTML → DOM XSS.
export function render(location: Location): void {
  const name = new URLSearchParams(location.search).get('name') ?? ''; // SOURCE
  // SINK (CWE-79): HTML built in a template literal, written to innerHTML raw.
  const out = document.getElementById('out');
  if (out) {
    out.innerHTML = `<div class="greeting">Hello ${name}</div>`;
  }
}
