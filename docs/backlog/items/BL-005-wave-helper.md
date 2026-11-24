---
id: BL-005
title: Add a wave helper
milestone: M1
priority: P2
size: S
status: done
depends_on: []
openspec_change: bl-005-add-a-wave-helper
completed_at: 2026-11-24T03:27:26-06:00
delivery_ref: https://github.com/patelsan/ai-factory-e2e/pull/12
---
# BL-005: Add a wave helper

## Outcome

Add `wave(name)` in `src/wave.js` returning `Hello there, <name>!`, with a test.

## In Scope

- A standalone `wave(name)` helper exported from `src/wave.js`.
- Automated coverage through the existing `npm test` script.

## Out of Scope

- Changes to `src/shout.js`, `src/farewell.js`, or any other item's scope.
- New dependencies, CI, repository settings, or secrets.

## Acceptance Criteria

- [ ] `wave(name)` exported from `src/wave.js` returns `Hello there, <name>!`.
- [ ] An automated test covers the message and runs within `npm test`.

## Verification

- `npm test` passes.

## Dependencies

None.

## References

- `docs/architecture/overview.md` — small Node.js CLI with no external dependencies.
- `docs/architecture/tech-stack.md` — Node.js 26, built-in test runner, npm.
- `docs/development.md` — `npm test`.
- `openspec/changes/bl-005-add-a-wave-helper/proposal.md` — OpenSpec change `bl-005-add-a-wave-helper`.

## Open Questions

None.
