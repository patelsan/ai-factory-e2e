# Tasks

## 1. Implement the repeat helper

- [ ] 1.1 Create `src/repeat.js` with a named `repeatText(text, n)` ESM export; verify the module imports cleanly and exposes a callable function.
- [ ] 1.2 Implement `repeatText(text, n)` so it returns the supplied text repeated `n` times joined by a single space; verify `node --input-type=module -e 'import("./src/repeat.js").then(m => console.log(m.repeatText("ha", 3)))'` prints `ha ha ha`.

## 2. Add acceptance coverage

- [ ] 2.1 Add `src/test/repeat.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [ ] 2.2 Cover scenario "Three repetitions" with the input `"ha"` repeated `3` times and expected output `ha ha ha`; verify the assertion compares the complete string and would fail if the count or separator changed.
- [ ] 2.3 Cover scenario "Single repetition has no separator" with the input `"ha"` repeated `1` time and expected output `ha`; verify the assertion fails if a leading or trailing space is added.

## 3. Verify scope and regression safety

- [ ] 3.1 Run `npm test` and verify the new repeat tests, the existing countdown, wave, farewell, and shout tests, and the existing smoke test pass.
- [ ] 3.2 Verify no changes were made to `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/repeat.js`, `src/test/repeat.test.js`, and the planning artifacts.

## Acceptance traceability

- BL-008 acceptance criterion "`repeatText("ha", 3)` returns `ha ha ha`" → scenario "Three repetitions" → tasks 1.2, 2.2, and 3.1.
- BL-008 acceptance criterion "An automated test covers the behavior and runs within `npm test`" → tasks 2.1 and 3.1.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result updates the `repeat` capability spec without altering existing specs or other helpers.
