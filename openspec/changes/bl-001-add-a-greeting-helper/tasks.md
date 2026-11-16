# Tasks

## 1. Greeting helper

- [ ] 1.1 Add `src/greeting.js` with a named export `greet(name)` returning
  `Hello, <name>!` for the supplied name; verify by importing it and confirming
  `greet("Ada")` returns `Hello, Ada!`.
- [ ] 1.2 Add `src/test/greeting.test.js` using `node:test` and
  `node:assert/strict`, covering both scenarios in `specs/greeting/spec.md`
  (`Ada` → `Hello, Ada!` and `Grace Hopper` → `Hello, Grace Hopper!`); verify
  `npm test` passes.

## 2. Integration check

- [ ] 2.1 Run `npm test` and confirm the complete suite passes, including the
  existing smoke test, with no new dependencies or configuration changes.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- BL-002 will import `greet` from `src/greeting.js`; no work for it is included
  in this change.
