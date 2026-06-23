// TN — benign single bounded model call.
import OpenAI from 'openai';
const client = new OpenAI();
export function answer(q: string) { return client.chat.completions.create({ model: 'gpt-4', messages: [{ role: 'user', content: q }], max_tokens: 256 }); }
