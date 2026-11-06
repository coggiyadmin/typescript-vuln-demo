import { loadSpec } from './reader';
import { openAt } from './writer';
// cognium-dev#1137 — the tainted value itself still reaches the callee sink.
export function run(input: string): void {
  const data = loadSpec(input);
  openAt(data);
}
