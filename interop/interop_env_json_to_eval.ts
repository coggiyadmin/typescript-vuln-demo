// IL-52 — JSON env blob → eval (IL-5 config frontier).
export function run(): void {
  const blob = process.env.USER_CODE ?? "{}";
  const code = JSON.parse(blob).expr ?? "0";
  eval(code);
}
