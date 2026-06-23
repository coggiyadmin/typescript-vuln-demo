/** TN — benign chat router; routes by enum, no untrusted text reaches a prompt. */
type Intent = 'billing' | 'support';
const HANDLERS: Record<Intent, () => string> = {
  billing: () => 'Routing to billing.', support: () => 'Routing to support.' };
export function route(intent: Intent): string { return HANDLERS[intent](); }
