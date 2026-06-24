// TP (CWE-94, ts) — setTimeout with a STRING argument IS eval-like code injection.
export function schedule(userCode: string): void {
  setTimeout(userCode, 1000); // SINK (CWE-94): string arg is eval'd
}
