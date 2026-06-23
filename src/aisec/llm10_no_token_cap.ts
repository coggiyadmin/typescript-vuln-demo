// Unbounded Consumption (OWASP LLM10) — no token cap on a user-driven completion. TP.
import OpenAI from 'openai';
const client = new OpenAI();
export function summarize(userText: string) {
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: userText }] }); // SINK
}
