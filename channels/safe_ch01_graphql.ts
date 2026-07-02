// TN — GraphQL id validated before lookup.
export function safeGraphql(id: string) {
  if (!/^[0-9]+$/.test(id)) throw new Error('bad id');
}
