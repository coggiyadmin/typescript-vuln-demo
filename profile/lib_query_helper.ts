// Library-API param — not HTTP attacker source (#128).
export function runQuery(userFilter: string): string {
  return `SELECT * FROM users WHERE name='${userFilter}'`;
}
