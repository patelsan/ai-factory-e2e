# Design

## Context

See `proposal.md` for motivation and `specs/repeat/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the existing source and test files use ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs in this repository, so no additional decision is binding.
- `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), and `src/farewell.js` (BL-004) are separate items and must not be changed by this one.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `repeatText` from `src/repeat.js`.
- Render the supplied text repeated `n` times as a single string joined by ` `.
- Cover the behavior with an automated test that runs under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to any CLI entry point; that is owned by another item.
- Changes to `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, or reuse of their helpers.
- Defining behavior for `n` below `1`, non-integer `n`, or missing/non-number input; the item supplies `n = 3` and does not specify validation or edge-case behavior.
- Defining behavior for missing, empty, or non-string `text`, or trimming, case conversion, localisation, or other normalisation of the supplied text.
- Configurable separators or a callback/list form; the item requires only a returned string joined by a single space.

## Decisions

### Standalone module instead of composing with an existing helper

`src/repeat.js` will build the repeated text directly rather than importing any existing helper.

- **Rationale:** The item requires the other helpers to remain unchanged, and repetition is a distinct behavior. The existing helpers format names or sequences into fixed messages and do not provide a reusable text-repetition primitive.
- **Alternative considered:** Compose the result from an existing greeting, wave, farewell, or countdown helper. Rejected because those helpers produce fixed messages or integer sequences with no text-repetition behavior.

### Build a sequence of copies, then join once

The helper will collect `n` copies of the supplied text and join them with a single space.

- **Rationale:** Joining an ordered sequence yields exactly the required `ha ha ha` form, with separators only between entries and no leading or trailing separator. It also preserves any spaces already present in the supplied text.
- **Alternative considered:** Concatenate copies in a loop while appending the separator conditionally. Rejected because joining is simpler and less error-prone at the sequence boundaries.

### Test with the project's built-in runner

Add `src/test/repeat.test.js` using `node:test` and `node:assert/strict`, matching the existing tests.

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [Repeated output could gain a leading or trailing separator] → Assert the complete string for `repeatText("ha", 3)` and assert the single-copy result for `repeatText("ha", 1)`.
- [Behavior for `n` below `1` or non-integer input is undefined] → Keep such input out of scope, as the item does not specify it. Validation or clamping can be specified separately if required later.
- [Tests might only check a substring] → Include exact-output assertions so the number of repetitions and the separator are both verified.
- [The supplied text could be normalised accidentally] → Use the supplied text unchanged in every copy and assert the complete output.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
