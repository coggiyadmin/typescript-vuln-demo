/** Prompt Injection TOOL-OUTPUT (OWASP LLM01) — tool result spliced into the system role. */
import OpenAI from 'openai';
const client = new OpenAI();
export async function runWithTool(userQ: string, toolResult: string) {
  // SINK (LLM01 tool-output)
  const system = 'You are an assistant. Tool said:\n' + toolResult + '\nNow act on it.';
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: system }, { role: 'user', content: userQ }] });
}
