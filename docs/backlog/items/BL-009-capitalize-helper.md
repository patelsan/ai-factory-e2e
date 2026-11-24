---
id: BL-009
title: Add a capitalize helper
milestone: M1
priority: P2
size: S
status: done
depends_on: []
openspec_change: bl-009-add-a-capitalize-helper
completed_at: 2026-11-24T16:09:10-06:00
delivery_ref: https://github.com/patelsan/ai-factory-e2e/pull/27
---
# BL-009: Add a capitalize helper

## Outcome

Add `capitalize(text)` in `src/capitalize.js` returning the text with its first character uppercased, with a test.

## In Scope

- A standalone `capitalize(text)` helper exported from `src/capitalize.js`.
- Automated coverage through `npm test`.

## Out of Scope

- Changes to any other item's files or scope.
- New dependencies, CI, repository settings, or secrets.

## Acceptance Criteria

- [ ] `capitalize("hello")` returns `Hello`.
- [ ] An automated test covers the behavior and runs within `npm test`.

## Verification

- `npm test` passes.
