---
id: BL-008
title: Add a repeat helper
milestone: M1
priority: P2
size: S
status: proposed
depends_on: []
openspec_change: bl-008-add-a-repeat-helper
completed_at: null
delivery_ref: null
---
# BL-008: Add a repeat helper

## Outcome

Add `repeatText(text, n)` in `src/repeat.js` returning the text repeated `n` times separated by a single space, with a test.

## In Scope

- A standalone `repeatText(text, n)` helper exported from `src/repeat.js`.
- Automated coverage through `npm test`.

## Out of Scope

- Changes to any other item's files or scope.
- New dependencies, CI, repository settings, or secrets.

## Acceptance Criteria

- [ ] `repeatText("ha", 3)` returns `ha ha ha`.
- [ ] An automated test covers the behavior and runs within `npm test`.

## Verification

- `npm test` passes.
