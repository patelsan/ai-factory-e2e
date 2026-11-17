# Tasks

## 1. Greeting helper

- [ ] 1.1 Add `src/greeting.js` as an ES module with a named export `greet(name)` that returns a fixed prefix, the supplied name verbatim and a fixed suffix; verify the module imports cleanly with `node --input-type=module -e 'import("./src/greeting.js").then(m => console.log(m.greet("Ada")))'` printing `Hello, Ada!`.
- [ ] 1.2 Add `src/test/greeting.test.js` using `node:test` and `node:assert/strict` with one case per scenario in `openspec/changes/bl-001-add-a-greeting-helper/specs/greeting/spec.md` (`Ada`, `Grace Hopper`, `ada`); verify `npm test` reports the new test file and all assertions pass.
- [ ] 1.3 Confirm `src/greeting.js` has no imports, top-level side effects, or console output so BL-002 can import it from `src/cli.js`; verify by reviewing the module and confirming `npm test` still passes.

## 2. Integration check

- [ ] 2.1 Run the full suite with `npm test` and confirm both `src/test/smoke.test.js` and `src/test/greeting.test.js` pass, matching the CI `test` job defined in `.github/workflows/ci.yml`.

## Workflow follow-up

- Archive the change once the phase PR is reviewed and merged.
- BL-002 then imports `greet` from `src/greeting.js`; this change does not touch `src/cli.js`.
