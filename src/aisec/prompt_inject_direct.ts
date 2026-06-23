/** Prompt Injection DIRECT (OWASP LLM01). */
import OpenAI from 'openai';
const client = new OpenAI();

export async function answer(userQuestion: string) {
  const system = 'You are a support bot.\n' + userQuestion;
  return client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: system }],
  });
}
