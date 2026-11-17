---
id: BL-003
title: Add an uppercase greeting helper
milestone: M1
priority: P1
size: S
status: proposed
depends_on: []
openspec_change: bl-003-add-an-uppercase-greeting-helper
completed_at: null
delivery_ref: null
---
# BL-003: Add an uppercase greeting helper

## Outcome

Add `shout(name)` in `src/shout.js` returning `HELLO, <NAME>!` in uppercase, with a test. Do not change BL-001 or BL-002.

## In Scope

- An uppercase greeting helper exported from `src/shout.js` that turns a supplied name into `HELLO, <NAME>!`.
- Automated coverage of that message through the existing `npm test` script.
- A standalone implementation that does not import or modify the greeting helper from BL-001.

## Out of Scope

- Changes to `src/greeting.js` or the greeting behavior owned by BL-001.
- Changes to `src/cli.js` or CLI output; that is BL-002.
- Input validation, trimming, localisation or other normalisation of names; no authoritative document defines them.
- New dependencies, CI, repository settings or secrets.

## Acceptance Criteria

- [ ] `shout(name)` exported from `src/shout.js` returns `HELLO, <NAME>!` with the supplied name and the complete message in uppercase (`Ada Lovelace` → `HELLO, ADA LOVELACE!`, `GRACE` → `HELLO, GRACE!`, `sam` → `HELLO, SAM!`).
- [ ] An automated test covers the uppercase greeting message and runs within `npm test` without disturbing the existing smoke test.
- [ ] `src/greeting.js` and `src/cli.js` remain unchanged, so BL-001 and BL-002 scope is preserved.

## Verification

- `npm test` (per `docs/development.md`) runs the shout test alongside `src/test/smoke.test.js` and passes.

## Dependencies

None.

## References

- `docs/architecture/overview.md` — small Node.js CLI with no external dependencies.
- `docs/architecture/tech-stack.md` — Node.js 26, built-in test runner, npm.
- `docs/development.md` — `npm test`.
- `openspec/changes/bl-003-add-an-uppercase-greeting-helper/proposal.md` — OpenSpec change `bl-003-add-an-uppercase-greeting-helper`.

## Open Questions

None.
