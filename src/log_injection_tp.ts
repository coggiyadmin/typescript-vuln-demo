// TP (CWE-117, ts) — untrusted input concatenated into a log line.
export function onLogin(user: string): void {
  console.log('login user=' + user); // SINK (CWE-117)
}
