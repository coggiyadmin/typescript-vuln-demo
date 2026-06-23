// Improper Output Handling (OWASP LLM05) — model output concatenated into SQL. TP.
import db from './db';
import OpenAI from 'openai';
const client = new OpenAI();
export async function search(nl: string) {
  const clause = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'WHERE clause for: ' + nl }] })).choices[0].message.content as string;
  return db.query('SELECT * FROM items WHERE ' + clause); // SINK (LLM05 -> SQLi)
}
