# Tasks

## 1. Implement the capitalize helper

- [x] 1.1 Create `src/capitalize.js` with a named `capitalize(text)` ESM export; verify the module imports cleanly and exposes a callable function.
- [x] 1.2 Implement `capitalize(text)` so it returns the supplied text with its first character uppercased and the remaining characters unchanged; verify `node --input-type=module -e 'import("./src/capitalize.js").then(m => console.log(m.capitalize("hello")))'` prints `Hello`.

## 2. Add acceptance coverage

- [x] 2.1 Add `src/test/capitalize.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [x] 2.2 Cover scenario "Lowercase first character is uppercased" with the input `"hello"` and expected output `Hello`; verify the assertion compares the complete string and would fail if the first character were not uppercased.
- [x] 2.3 Cover scenario "Remaining characters are preserved" with the input `"hello world"` and expected output `Hello world`; verify the assertion fails if the remainder is uppercased or otherwise changed.
- [x] 2.4 Cover scenario "Already-uppercase first character is preserved" with the input `"Hello"` and expected output `Hello`; verify the assertion passes.

## 3. Verify scope and regression safety

- [x] 3.1 Run `npm test` and verify the new capitalize tests, the existing slugify, repeat, countdown, wave, farewell, and shout tests, and the existing smoke test pass.
- [x] 3.2 Verify no changes were made to `src/slugify.js`, `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/capitalize.js`, `src/test/capitalize.test.js`, and the planning artifacts.

## Acceptance traceability

- BL-009 acceptance criterion "`capitalize("hello")` returns `Hello`" → scenario "Lowercase first character is uppercased" → tasks 1.2, 2.2, and 3.1.
- BL-009 acceptance criterion "An automated test covers the behavior and runs within `npm test`" → tasks 2.1 and 3.1.
- Spec scenario "Remaining characters are preserved" (first-character boundary) → tasks 1.2, 2.3, and 3.1.
- Spec scenario "Already-uppercase first character is preserved" → tasks 1.2, 2.4, and 3.1.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result adds the `capitalize` capability spec without altering existing specs or other helpers.
