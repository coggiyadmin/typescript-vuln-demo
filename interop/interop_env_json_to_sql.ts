/** IL-48 — JSON env blob → SQL string (IL-5 config frontier). */
import sqlite3 from "sqlite3";

export function lookup(): void {
  const blob = process.env.USER_FILTER ?? "{}";
  const filt = JSON.parse(blob).name ?? "";
  new sqlite3.Database(":memory:").run("SELECT * FROM u WHERE n='" + filt + "'");
}
