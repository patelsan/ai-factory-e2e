---
id: BL-001
title: Add a greeting helper
milestone: M1
priority: P0
size: S
status: proposed
depends_on: []
openspec_change: bl-001-add-a-greeting-helper
completed_at: null
delivery_ref: null
---
# BL-001: Add a greeting helper

## Outcome

Add `greet(name)` in `src/greeting.js` returning `Hello, <name>!`, with a test.

## In Scope

- A greeting helper exported from `src/greeting.js` that turns a supplied name into `Hello, <name>!`.
- Automated coverage of that message through the existing `npm test` script.

## Out of Scope

- Using the helper in `src/cli.js` or printing greetings from the CLI; that is BL-002.
- Input validation, trimming, capitalisation or localisation of names; no authoritative document defines them.
- New dependencies, CI, repository settings or secrets.

## Acceptance Criteria

- [ ] `greet(name)` exported from `src/greeting.js` returns `Hello, <name>!` with the name inserted verbatim (`Ada` → `Hello, Ada!`, `Grace Hopper` → `Hello, Grace Hopper!`, `ada` → `Hello, ada!`).
- [ ] An automated test covers the greeting message and runs within `npm test` without disturbing the existing smoke test.

## Verification

- `npm test` (per `docs/development.md`) runs the greeting test alongside `src/test/smoke.test.js` and passes.

## Dependencies

None.

## References

- `docs/product/requirements.md` — BL-001 adds a greeting helper.
- `docs/architecture/overview.md` — small Node.js CLI with no external dependencies.
- `docs/architecture/tech-stack.md` — Node.js 26, built-in test runner, npm.
- `docs/development.md` — `npm test`.
- `openspec/changes/bl-001-add-a-greeting-helper/proposal.md` — OpenSpec change `bl-001-add-a-greeting-helper`.

## Open Questions

None.
