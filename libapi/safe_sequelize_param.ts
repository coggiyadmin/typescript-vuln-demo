// Z6 N2 benign mirror — Sequelize parameterized query.
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');
export async function lookup(role: string) {
  await sequelize.query('SELECT * FROM users WHERE role=?', { replacements: [role] });
}
