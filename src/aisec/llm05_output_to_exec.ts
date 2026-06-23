// Improper Output Handling (OWASP LLM05) — model output executed via eval(). TP.
import OpenAI from 'openai';
const client = new OpenAI();
export async function runGenerated(task: string) {
  const code = (await client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'user', content: 'JS expression for: ' + task }] })).choices[0].message.content as string;
  return eval(code); // SINK (LLM05): model output executed
}
