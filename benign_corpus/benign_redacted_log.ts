export function logUser(user: string) {
  console.log('event=user_lookup value=%s', String(user).replace(/[\r\n\t]/g, '_'));
}
