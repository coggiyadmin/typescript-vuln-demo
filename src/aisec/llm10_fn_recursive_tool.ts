// Unbounded Consumption FN (OWASP LLM10) — recursive tool re-invokes the model. MISS.
import OpenAI from 'openai';
const client = new OpenAI();
export async function expand(topic: string): Promise<string> {
  const sub = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'Sub-topics of ' + topic }] })).choices[0].message.content as string;
  for (const line of sub.split('\n')) if (line.trim()) await expand(line.trim()); // SINK (recursive)
  return sub;
}
