// IL-59 — JSON env blob → YAML parse sink (IL-5 config frontier).
import yaml from 'js-yaml';

export function load(): void {
  const blob = process.env.USER_BLOB ?? '{}';
  const raw = JSON.parse(blob).payload ?? '';
  yaml.load(raw);
}
