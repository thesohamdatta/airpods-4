# Domain Docs

## Layout

**Single-context** — one `CONTEXT.md` + `docs/adr/` at the repo root.

## Consumer rules

- **`CONTEXT.md`** at the repo root contains the project's domain language, glossary, and architectural overview. Skills (`improve-codebase-architecture`, `diagnosing-bugs`, `tdd`) read this file to learn the project's vocabulary before performing work.
- **`docs/adr/`** contains Architecture Decision Records. Each ADR is a markdown file following the standard template. Skills respect these when making architectural changes.

## Multi-context (future)

If this repo grows into a monorepo with separate contexts (e.g., frontend + backend), create a `CONTEXT-MAP.md` at the root pointing to per-context `CONTEXT.md` files, and update this doc accordingly.
