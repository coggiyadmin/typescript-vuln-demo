// SAFE mirror (OWASP LLM05) — model output assigned as text, never parsed as HTML.
export function renderAnswer(el: HTMLElement, answer: string): void { el.textContent = answer; }
