# Tasks

## 1. Implement the farewell helper

- [x] 1.1 Create `src/farewell.js` with a named `farewell(name)` ESM export; verify the module imports cleanly and exposes a callable function.
- [x] 1.2 Implement `farewell(name)` so it returns the supplied name inside the fixed `Goodbye, <name>!` template without changing its case; verify `node --input-type=module -e 'import("./src/farewell.js").then(m => console.log(m.farewell("Ada Lovelace")))'` prints `Goodbye, Ada Lovelace!`.

## 2. Add acceptance coverage

- [x] 2.1 Add `src/test/farewell.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [x] 2.2 Cover scenario "Name is rendered as supplied" with the input `Ada Lovelace` and expected output `Goodbye, Ada Lovelace!`; verify the assertion fails if the name's case is changed.
- [x] 2.3 Cover scenario "Exact punctuation and spacing are used" with the input `sam` and expected output `Goodbye, sam!`; verify the assertion compares the complete string rather than a substring.

## 3. Verify scope and regression safety

- [x] 3.1 Run `npm test` and verify the new farewell tests, the existing shout tests, and the existing smoke test pass.
- [x] 3.2 Verify no changes were made to `src/greeting.js`, `src/cli.js`, `src/shout.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/farewell.js`, `src/test/farewell.test.js`, and the planning artifacts.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result updates the `farewell` capability spec without altering existing specs or other helpers.
