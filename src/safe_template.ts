/**
 * SAFE / TN fixture — server-side HTML rendering with contextual escaping.
 * Realistic templating code; all interpolated values are HTML-escaped before
 * insertion. The scanner MUST produce ZERO security findings; any xss finding
 * is a FALSE POSITIVE.
 */

const ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

/** Escape every HTML-significant character before it reaches markup. */
export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (ch) => ESCAPES[ch]);
}

export interface Comment {
  author: string;
  body: string;
}

/** Render a comment list; both author and body are escaped. */
export function renderComments(comments: Comment[]): string {
  return comments
    .map((c) => `<li><b>${escapeHtml(c.author)}</b>: ${escapeHtml(c.body)}</li>`)
    .join('\n');
}

/** Build a greeting page from an untrusted display name (escaped). */
export function renderGreeting(displayName: string): string {
  const safe = escapeHtml(displayName);
  return `<!doctype html><html><body><h1>Welcome, ${safe}</h1></body></html>`;
}
