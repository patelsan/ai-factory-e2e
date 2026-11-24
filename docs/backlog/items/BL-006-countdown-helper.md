---
id: BL-006
title: Add a countdown helper
milestone: M1
priority: P2
size: S
status: ready
depends_on: []
openspec_change: null
completed_at: null
delivery_ref: null
---
# BL-006: Add a countdown helper

## Outcome

Add `countdown(n)` in `src/countdown.js` returning the integers from `n` down to 1 joined by `, `, with a test.

## In Scope

- A standalone `countdown(n)` helper exported from `src/countdown.js`.
- Automated coverage through the existing `npm test` script.

## Out of Scope

- Changes to `src/wave.js`, `src/shout.js`, `src/farewell.js`, or any other item's scope.
- New dependencies, CI, repository settings, or secrets.

## Acceptance Criteria

- [ ] `countdown(3)` returns `3, 2, 1`.
- [ ] An automated test covers the behavior and runs within `npm test`.

## Verification

- `npm test` passes.

## Dependencies

None.
