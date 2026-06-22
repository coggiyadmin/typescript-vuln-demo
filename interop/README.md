# interop/ — in-language polyglot (TypeScript)

In-language cross-language fixtures (host=TS embeds a guest DSL). Cross-binary cases live in
`coggiyadmin/interop-vuln-demo`. Plan:
`cogniumhq/sast-validation/research/cross-language-interop-plan.md` (IL-1).

Note: the whole TS row is engine-blocked by **#67** (parse fragility) — these are SKIP-gated
expected-MISS until #67 lands, like the rest of the TS parity set.

Each ships TP + `safe_*` + `benign_*`.

| Fixture | Boundary | CWE | Expected |
|---------|----------|-----|----------|
| `interop_jsx.tsx` | TS → JSX `dangerouslySetInnerHTML` | 79/94 | FN (**#88a/b** — JSX/TSX not parsed) |
| `interop_html_in_template_literal.ts` | TS → HTML in template literal → `innerHTML` | 79 | FN |
| `interop_sql_in_string.ts` | TS → SQL DSL in string → query | 89 | partial / parse-blocked (#67) |
