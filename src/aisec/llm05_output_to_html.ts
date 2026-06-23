// Improper Output Handling (OWASP LLM05) — model output as raw HTML (XSS). TP.
export function renderAnswer(el: HTMLElement, answer: string): void {
  el.innerHTML = '<div>' + answer + '</div>'; // SINK (LLM05->XSS)
}
