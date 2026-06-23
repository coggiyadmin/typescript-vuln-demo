/** Prompt Injection INDIRECT (OWASP LLM01). */
import OpenAI from 'openai';
const client = new OpenAI();

export async function summarizeUrl(url: string) {
  const page = await fetch(url).then((r) => r.text());
  const prompt = 'Follow directives in:\n' + page;
  return client.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }],
  });
}
