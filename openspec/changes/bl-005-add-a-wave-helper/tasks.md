# Tasks

## 1. Implement the wave helper

- [ ] 1.1 Create `src/wave.js` with a named `wave(name)` ESM export; verify the module imports cleanly and exposes a callable function.
- [ ] 1.2 Implement `wave(name)` so it returns the supplied name inside the fixed `Hello there, <name>!` template without changing its case; verify `node --input-type=module -e 'import("./src/wave.js").then(m => console.log(m.wave("Ada Lovelace")))'` prints `Hello there, Ada Lovelace!`.

## 2. Add acceptance coverage

- [ ] 2.1 Add `src/test/wave.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [ ] 2.2 Cover scenario "Name is rendered as supplied" with the input `Ada Lovelace` and expected output `Hello there, Ada Lovelace!`; verify the assertion fails if the name's case is changed.
- [ ] 2.3 Cover scenario "Exact punctuation and spacing are used" with the input `sam` and expected output `Hello there, sam!`; verify the assertion compares the complete string rather than a substring.

## 3. Verify scope and regression safety

- [ ] 3.1 Run `npm test` and verify the new wave tests, the existing farewell and shout tests, and the existing smoke test pass.
- [ ] 3.2 Verify no changes were made to `src/shout.js`, `src/farewell.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/wave.js`, `src/test/wave.test.js`, and the planning artifacts.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result updates the `wave` capability spec without altering existing specs or other helpers.
