// SAFE mirror (OWASP LLM10) — input length capped and max_tokens bounded.
import OpenAI from 'openai';
const client = new OpenAI();
const MAX_INPUT = 8000;
export function summarize(userText: string) {
  if (userText.length > MAX_INPUT) throw new Error('input too large');
  return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: userText }], max_tokens: 512 });
}
