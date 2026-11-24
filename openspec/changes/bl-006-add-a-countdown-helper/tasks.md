# Tasks

## 1. Implement the countdown helper

- [ ] 1.1 Create `src/countdown.js` with a named `countdown(n)` ESM export; verify the module imports cleanly and exposes a callable function.
- [ ] 1.2 Implement `countdown(n)` so it returns the integers from `n` down to `1` joined by `, `; verify `node --input-type=module -e 'import("./src/countdown.js").then(m => console.log(m.countdown(3)))'` prints `3, 2, 1`.

## 2. Add acceptance coverage

- [ ] 2.1 Add `src/test/countdown.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [ ] 2.2 Cover scenario "Countdown from three" with the input `3` and expected output `3, 2, 1`; verify the assertion compares the complete string and would fail if the order or separator changed.
- [ ] 2.3 Cover scenario "Countdown from one has no separator" with the input `1` and expected output `1`; verify the assertion fails if a leading or trailing separator is added.

## 3. Verify scope and regression safety

- [ ] 3.1 Run `npm test` and verify the new countdown tests, the existing wave, farewell, and shout tests, and the existing smoke test pass.
- [ ] 3.2 Verify no changes were made to `src/wave.js`, `src/shout.js`, `src/farewell.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/countdown.js`, `src/test/countdown.test.js`, and the planning artifacts.

## Acceptance traceability

- BL-006 acceptance criterion "`countdown(3)` returns `3, 2, 1`" → scenario "Countdown from three" → tasks 1.2, 2.2, and 3.1.
- BL-006 acceptance criterion "An automated test covers the behavior and runs within `npm test`" → tasks 2.1 and 3.1.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result updates the `countdown` capability spec without altering existing specs or other helpers.
