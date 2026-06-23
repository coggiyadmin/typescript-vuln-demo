/** Prompt Injection FN (OWASP LLM01) — multi-hop translation relay. MISS. */
import OpenAI from 'openai';
const client = new OpenAI();
export async function relay(userText: string) {
  const decoded = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: 'Translate to English.' }, { role: 'user', content: userText }] }))
    .choices[0].message.content;
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: 'Do exactly this:\n' + decoded }] }); // SINK (LLM01 relay)
}
