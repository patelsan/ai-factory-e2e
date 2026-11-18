---
id: BL-004
title: Add a farewell helper
milestone: M1
priority: P1
size: S
status: implementing
depends_on: []
openspec_change: bl-004-add-a-farewell-helper
completed_at: null
delivery_ref: null
---
# BL-004: Add a farewell helper

## Outcome

Add `farewell(name)` in `src/farewell.js` returning `Goodbye, <name>!`, with a test. Do not change other helpers.

## In Scope

- A farewell helper exported from `src/farewell.js` that turns a supplied name into `Goodbye, <name>!`.
- Automated coverage of that message through the existing `npm test` script.
- A standalone implementation that does not import or modify the greeting helper from BL-001 or the uppercase greeting helper from BL-003.

## Out of Scope

- Changes to `src/greeting.js` or the greeting behavior owned by BL-001.
- Changes to `src/cli.js` or CLI output; that is BL-002.
- Changes to `src/shout.js` or the uppercase greeting behavior owned by BL-003.
- Case conversion, input validation, trimming, localisation or other normalisation of names; no authoritative document defines them.
- New dependencies, CI, repository settings or secrets.

## Acceptance Criteria

- [ ] `farewell(name)` exported from `src/farewell.js` returns `Goodbye, <name>!` with the supplied name preserved as given (`Ada Lovelace` → `Goodbye, Ada Lovelace!`, `sam` → `Goodbye, sam!`).
- [ ] An automated test covers the farewell message and runs within `npm test` without disturbing the existing smoke and shout tests.
- [ ] `src/greeting.js`, `src/cli.js` and `src/shout.js` remain unchanged, so BL-001, BL-002 and BL-003 scope is preserved.

## Verification

- `npm test` (per `docs/development.md`) runs the farewell test alongside the existing tests and passes.

## Dependencies

None.

## References

- `docs/architecture/overview.md` — small Node.js CLI with no external dependencies.
- `docs/architecture/tech-stack.md` — Node.js 26, built-in test runner, npm.
- `docs/development.md` — `npm test`.
- `openspec/changes/bl-004-add-a-farewell-helper/proposal.md` — OpenSpec change `bl-004-add-a-farewell-helper`.

## Open Questions

None.
