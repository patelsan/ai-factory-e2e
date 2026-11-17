# Tasks

## 1. Implement the uppercase greeting helper

- [ ] 1.1 Create `src/shout.js` with a named `shout(name)` ESM export; verify the module imports cleanly and exposes a callable function.
- [ ] 1.2 Implement `shout(name)` so it uppercases the supplied name and returns it inside the fixed `HELLO, <NAME>!` template; verify `node --input-type=module -e 'import("./src/shout.js").then(m => console.log(m.shout("Ada Lovelace")))'` prints `HELLO, ADA LOVELACE!`.

## 2. Add acceptance coverage

- [ ] 2.1 Add `src/test/shout.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [ ] 2.2 Cover scenario "Mixed-case name is uppercased" with the input `Ada Lovelace` and expected output `HELLO, ADA LOVELACE!`; verify the assertion fails if the name is not uppercased.
- [ ] 2.3 Cover scenario "Already-uppercase name is preserved" with the input `GRACE` and expected output `HELLO, GRACE!`; verify the assertion passes.
- [ ] 2.4 Cover scenario "Exact punctuation and spacing are used" with the input `sam` and expected output `HELLO, SAM!`; verify the assertion compares the complete string rather than a substring.

## 3. Verify scope and regression safety

- [ ] 3.1 Run `npm test` and verify both the new shout tests and the existing smoke test pass.
- [ ] 3.2 Verify no changes were made to `src/greeting.js`, `src/cli.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/shout.js`, `src/test/shout.test.js`, and the planning artifacts.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result updates the `uppercase-greeting` capability spec without altering BL-001 or BL-002 scope.
