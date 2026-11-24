---
id: BL-007
title: Add a slugify helper
milestone: M1
priority: P2
size: S
status: done
depends_on: []
openspec_change: bl-007-add-a-slugify-helper
completed_at: 2026-11-24T11:28:15-06:00
delivery_ref: https://github.com/patelsan/ai-factory-e2e/pull/23
---
# BL-007: Add a slugify helper

## Outcome

Add `slugify(text)` in `src/slugify.js` returning a lowercase, hyphen-separated slug, with a test.

## In Scope

- A standalone `slugify(text)` helper exported from `src/slugify.js`.
- Automated coverage through `npm test`.

## Out of Scope

- Changes to any other item's files or scope.
- New dependencies, CI, repository settings, or secrets.

## Acceptance Criteria

- [ ] `slugify("Hello World")` returns `hello-world`.
- [ ] An automated test covers the behavior and runs within `npm test`.

## Verification

- `npm test` passes.
