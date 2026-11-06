import { loadSpec } from './reader';
import { openAt } from './writer';
// cognium-dev#1137 — .length is a number and must not carry the file taint across the call.
export function run(input: string): void {
  const data = loadSpec(input);
  openAt(data.length);
}
