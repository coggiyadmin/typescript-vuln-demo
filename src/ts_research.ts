/**
 * TS DEEP-DIVE — TypeScript-specific FP and FN probes.
 *
 * FN section: real vulns through TS-specific shapes (NestJS decorators, type
 * assertions, template literals). FP section: type-safe shapes that must stay
 * clean. Findings are labeled inline.
 */
import { Controller, Get, Query, Param } from '@nestjs/common';
import { exec } from 'child_process';

declare const db: { query: (sql: string, params?: unknown[]) => Promise<unknown> };

// ───────── FALSE-NEGATIVE probes (must FIRE) ─────────

@Controller('users')
export class UsersController {
  // 1. NestJS @Query decorator source → template-literal SQLi
  @Get('search')
  async search(@Query('name') name: string) {
    return db.query(`SELECT * FROM users WHERE name = '${name}'`); // CWE-89
  }

  // 2. NestJS @Param decorator source → command injection
  @Get(':host/ping')
  ping(@Param('host') host: string) {
    return exec(`ping -c 3 ${host}`); // CWE-78
  }
}

// 3. TYPE ASSERTION must NOT launder taint
export async function assertionLaundering(input: unknown) {
  const name = input as string;                 // assertion is compile-time only
  return db.query(`SELECT * FROM users WHERE name = '${name}'`); // CWE-89 — still tainted
}

// ───────── FALSE-POSITIVE probes (must stay CLEAN) ─────────

// 4. Numeric-typed parameter cannot carry injection
export async function byId(id: number) {
  return db.query('SELECT * FROM users WHERE id = ' + id); // safe: number type
}

// 5. Parameterized query with bound params
export async function byNameSafe(name: string) {
  return db.query('SELECT * FROM users WHERE name = $1', [name]); // safe: bound param
}

// 6. Union of string literals cannot be arbitrary input
type SortCol = 'name' | 'email' | 'created_at';
export async function sortBy(col: SortCol) {
  return db.query('SELECT * FROM users ORDER BY ' + col); // safe: closed literal union
}
