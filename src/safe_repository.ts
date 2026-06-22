/**
 * SAFE / TN fixture — data-access layer using parameterized queries throughout.
 * Realistic repository code with a real DB surface but no injection. The scanner
 * MUST produce ZERO security findings; any sql_injection finding is a FALSE POSITIVE.
 */
import type { Pool } from 'pg';

export interface UserRow {
  id: number;
  email: string;
  displayName: string;
}

export class UserRepository {
  constructor(private readonly pool: Pool) {}

  /** Lookup by id — value bound as a parameter, never interpolated. */
  async findById(id: number): Promise<UserRow | null> {
    const { rows } = await this.pool.query(
      'SELECT id, email, display_name AS "displayName" FROM users WHERE id = $1',
      [id],
    );
    return rows[0] ?? null;
  }

  /** Search by email fragment — still parameterized, even with LIKE. */
  async searchByEmail(fragment: string): Promise<UserRow[]> {
    const { rows } = await this.pool.query(
      'SELECT id, email, display_name AS "displayName" FROM users WHERE email LIKE $1 LIMIT 50',
      [`%${fragment}%`],
    );
    return rows;
  }

  /** Sort maps to one of a fixed set of fully-constant query literals. */
  async list(sort: string): Promise<UserRow[]> {
    switch (sort) {
      case 'email': {
        const { rows } = await this.pool.query(
          'SELECT id, email, display_name AS "displayName" FROM users ORDER BY email ASC LIMIT 100',
        );
        return rows;
      }
      case 'name': {
        const { rows } = await this.pool.query(
          'SELECT id, email, display_name AS "displayName" FROM users ORDER BY display_name ASC LIMIT 100',
        );
        return rows;
      }
      default: {
        const { rows } = await this.pool.query(
          'SELECT id, email, display_name AS "displayName" FROM users ORDER BY id ASC LIMIT 100',
        );
        return rows;
      }
    }
  }
}
