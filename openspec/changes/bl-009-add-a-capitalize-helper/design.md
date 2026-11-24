# Design

## Context

See `proposal.md` for motivation and `specs/capitalize/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the existing source and test files use ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs or contract documents in this repository, so no additional decision is binding.
- `src/slugify.js` (BL-007), `src/repeat.js` (BL-008), `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), and `src/farewell.js` (BL-004) are separate items and must not be changed by this one.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `capitalize` from `src/capitalize.js`.
- Return the supplied text with its first character uppercased and its remaining characters preserved unchanged.
- Cover the behavior and its first-character boundary with automated tests that run under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to any CLI entry point; that is owned by another item.
- Changes to `src/slugify.js`, `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, or reuse of their helpers.
- Lowercasing or otherwise normalizing the remaining characters; only the first character is uppercased.
- Defining behavior for missing, empty, or non-string `text`; the item does not specify validation or error behavior.
- Locale-specific casing rules; the helper uses JavaScript's standard uppercase conversion for the first character.

## Decisions

### Standalone module instead of composing with an existing helper

`src/capitalize.js` will implement the behavior directly rather than importing any existing helper.

- **Rationale:** The item requires the other helpers to remain unchanged, and capitalization is a distinct behavior. The existing helpers format names or sequences into fixed messages and provide no first-character text primitive.
- **Alternative considered:** Compose the result from the uppercase-greeting or greeting helper. Rejected because those helpers uppercase entire names or produce fixed greeting messages, not a first-character-only transformation.

### Uppercase only the first character and preserve the remainder

The helper will take the first character, uppercase it, and concatenate the unchanged remainder.

- **Rationale:** `capitalize("hello")` must become `Hello`, while `capitalize("hello world")` must keep the rest of the string unchanged. Uppercasing only the first character satisfies both the acceptance criterion and the "first character" wording without changing the rest of the text.
- **Alternative considered:** Uppercase the entire string. Rejected because it would change every character and contradict the first-character-only behavior.

### Test with the project's built-in runner

Add `src/test/capitalize.test.js` using `node:test` and `node:assert/strict`, matching the existing tests (for example `src/test/slugify.test.js`).

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [The whole string could be uppercased instead of only the first character] → Assert the complete string for `capitalize("hello world")` and verify the remainder is unchanged.
- [The first character could be left lowercase] → Assert the complete string for `capitalize("hello")` and verify it equals `Hello`.
- [The first character could be lowercased or changed when it is already uppercase] → Assert the complete string for `capitalize("Hello")`.
- [Empty, missing, or non-string input is undefined] → Keep such input out of scope, as the item does not specify it. Validation or edge-case behavior can be specified separately if required later.
- [Tests might only check a substring] → Include exact-output assertions so the first character and the remainder are both verified.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
