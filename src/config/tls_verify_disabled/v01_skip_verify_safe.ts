import https from 'https';
export function client() { return new https.Agent({ rejectUnauthorized: true }); }
