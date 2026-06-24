import https from 'https';
export function client() {
  return new https.Agent({ rejectUnauthorized: false }); // SINK CWE-295
}
