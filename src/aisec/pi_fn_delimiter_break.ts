/** Prompt Injection FN (OWASP LLM01) — delimiter/role-fence break. MISS. */
import OpenAI from 'openai';
const client = new OpenAI();
const SYSTEM = 'You are a translator. Translate the user text inside <data> tags.';
export async function translate(userText: string) {
  const fenced = `<data>${userText}</data>`; // SINK (LLM01 delimiter break)
  return client.chat.completions.create({ model: 'gpt-4',
    messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: fenced }] });
}
