// FP-target (cognium-dev#152, ts) — setTimeout/setInterval with a FUNCTION argument is not code
// injection; CWE-94 must require a STRING argument. The function-arg form must stay clean.
export function schedule(cb: () => void): void {
  setTimeout(cb, 1000); // function variable — NOT eval, must not fire CWE-94
  setInterval(() => cb(), 5000); // arrow function — NOT eval
}
