// SAFE mirror (OWASP LLM05) — model output parsed as a number, never executed.
import OpenAI from 'openai';
const client = new OpenAI();
export async function runGenerated(task: string): Promise<number> {
  const out = ((await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Return only the number for: ' + task }] })).choices[0].message.content as string).trim();
  const n = Number(out);
  if (Number.isNaN(n)) throw new Error('not a number');
  return n;
}
