# Tasks

## 1. Implement the slugify helper

- [x] 1.1 Create `src/slugify.js` with a named `slugify(text)` ESM export; verify the module imports cleanly and exposes a callable function.
- [x] 1.2 Implement `slugify(text)` so it returns the lowercased text with its words joined by a single `-`; verify `node --input-type=module -e 'import("./src/slugify.js").then(m => console.log(m.slugify("Hello World")))'` prints `hello-world`.

## 2. Add acceptance coverage

- [x] 2.1 Add `src/test/slugify.test.js` using `node:test` and `node:assert/strict`; verify `npm test` passes.
- [x] 2.2 Cover scenario "Lowercase hyphen-separated slug" with the input `"Hello World"` and expected output `hello-world`; verify the assertion compares the complete string and would fail if casing or the separator changed.
- [x] 2.3 Cover scenario "Whitespace runs and edges produce a single internal hyphen" with the input `"  Hello   World  "` and expected output `hello-world`; verify the assertion fails if a leading, trailing, or repeated hyphen is produced.

## 3. Verify scope and regression safety

- [x] 3.1 Run `npm test` and verify the new slugify tests, the existing repeat, countdown, wave, farewell, and shout tests, and the existing smoke test pass.
- [x] 3.2 Verify no changes were made to `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, CI workflows, or repository settings; confirm the delivered change is limited to `src/slugify.js`, `src/test/slugify.test.js`, and the planning artifacts.

## Acceptance traceability

- BL-007 acceptance criterion "`slugify("Hello World")` returns `hello-world`" → scenario "Lowercase hyphen-separated slug" → tasks 1.2, 2.2, and 3.1.
- BL-007 acceptance criterion "An automated test covers the behavior and runs within `npm test`" → tasks 2.1 and 3.1.
- Spec scenario "Whitespace runs and edges produce a single internal hyphen" (word-separation boundary) → tasks 1.2, 2.3, and 3.1.

## Workflow follow-up

- Archive the change after the project's review requirements are satisfied.
- Verify the archived result adds the `slugify` capability spec without altering existing specs or other helpers.
