// SAFE mirror (OWASP LLM10) — bounded by a hard max-steps budget.
import OpenAI from 'openai';
const client = new OpenAI();
const MAX_STEPS = 8;
export async function agent(goal: string) {
  const history: any[] = [{ role: 'user', content: goal }];
  for (let i = 0; i < MAX_STEPS; i++) {
    const step = await client.chat.completions.create({ model: 'gpt-4', messages: history, max_tokens: 512 });
    const msg = step.choices[0].message.content as string;
    history.push({ role: 'assistant', content: msg });
    if (msg.includes('DONE')) break;
  }
  return history;
}
