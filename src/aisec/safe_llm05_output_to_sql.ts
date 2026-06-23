// SAFE mirror (OWASP LLM05) — constant parameterized query per allowed field.
import db from './db';
import OpenAI from 'openai';
const client = new OpenAI();
export async function search(nl: string, value: string) {
  const field = ((await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Field for: ' + nl }] })).choices[0].message.content as string).trim();
  if (field === 'name') return db.query('SELECT * FROM items WHERE name = ?', [value]);
  if (field === 'sku') return db.query('SELECT * FROM items WHERE sku = ?', [value]);
  throw new Error('field not allowed');
}
