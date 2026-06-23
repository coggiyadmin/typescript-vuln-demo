// Unbounded Consumption (OWASP LLM10) — agent loop with no cap. TP.
import OpenAI from 'openai';
const client = new OpenAI();
export async function agent(goal: string) {
  const history: any[] = [{ role: 'user', content: goal }];
  while (true) { // SINK (LLM10): no max-steps guard
    const step = await client.chat.completions.create({ model: 'gpt-4', messages: history });
    const msg = step.choices[0].message.content as string;
    history.push({ role: 'assistant', content: msg });
    if (msg.includes('DONE')) return history;
  }
}
