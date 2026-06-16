/**
 * NEGATIVE TEST FILE — secure equivalents of every vulnerable pattern.
 *
 * Flows user input through safe APIs to each sink type. The scanner MUST
 * produce ZERO security findings here. Any finding is a FALSE POSITIVE to be
 * filed against cognium-dev.
 *
 * Safe patterns exercised:
 *   sql_injection     → parameterized query ($1 placeholders)
 *   xss               → DOMPurify.sanitize
 *   command_injection → execFile with arg array (no shell)
 *   ssrf              → host allowlist before fetch
 *   path_traversal    → path.resolve + prefix check
 *   open_redirect     → redirect allowlist
 *   insecure_cookie   → res.cookie with secure + httpOnly + sameSite
 */

import express, { Request, Response } from 'express';
import { execFile } from 'child_process';
import * as path from 'path';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const app = express();
app.use(express.json());

const DOMPurify = createDOMPurify(new JSDOM('').window as unknown as Window);
const UPLOAD_ROOT = path.resolve('/var/app/uploads');
const ALLOWED_HOSTS = new Set(['api.internal.example.com', 'cdn.example.com']);
const ALLOWED_REDIRECTS = new Set(['/dashboard', '/profile']);

// SAFE sql — parameterized query
app.get('/api/users', async (req: Request, res: Response) => {
    const { Client } = await import('pg');
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();
    const result = await client.query(
        'SELECT * FROM users WHERE name = $1 AND role = $2',
        [req.query.search, req.query.role],            // parameters, not concatenation
    );
    res.json(result.rows);
});

// SAFE xss — DOMPurify sanitizes before rendering
app.get('/search', (req: Request, res: Response) => {
    const clean = DOMPurify.sanitize(String(req.query.q ?? ''));
    res.send(`<h1>Results for: ${clean}</h1>`);
});

// SAFE command — execFile with arg array, no shell
app.post('/api/tools/ping', (req: Request, res: Response) => {
    execFile('ping', ['-c', '3', '--', String(req.body.host)], (_e, stdout) => {
        res.json({ output: stdout });
    });
});

// SAFE ssrf — host validated against allowlist before fetch
app.get('/api/fetch', async (req: Request, res: Response) => {
    let url: URL;
    try { url = new URL(String(req.query.url)); } catch { return res.status(400).end(); }
    if (!ALLOWED_HOSTS.has(url.hostname)) { return res.status(403).end(); }
    const r = await fetch(url.href);
    res.send(await r.text());
});

// SAFE path — resolve and verify prefix
app.get('/files/:name', (req: Request, res: Response) => {
    const target = path.resolve(UPLOAD_ROOT, req.params.name);
    if (!target.startsWith(UPLOAD_ROOT + path.sep)) { return res.status(403).end(); }
    res.sendFile(target);
});

// SAFE redirect — allowlist
app.get('/auth/callback', (req: Request, res: Response) => {
    const next = ALLOWED_REDIRECTS.has(String(req.query.next))
        ? String(req.query.next) : '/dashboard';
    res.redirect(next);
});

// SAFE cookie — secure + httpOnly + sameSite
app.post('/auth/login', (req: Request, res: Response) => {
    res.cookie('auth', String(req.body.token), {
        secure: true, httpOnly: true, sameSite: 'strict', maxAge: 3600000,
    });
    res.json({ ok: true });
});

app.listen(3001);
export default app;
