// XSS variant: DOM innerHTML.
const el = document.getElementById('x')!;
el.innerHTML = location.hash.slice(1); // SINK CWE-79
