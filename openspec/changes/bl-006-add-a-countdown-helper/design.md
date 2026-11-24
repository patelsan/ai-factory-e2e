# Design

## Context

See `proposal.md` for motivation and `specs/countdown/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the existing source and test files use ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs in this repository, so no additional decision is binding.
- `src/wave.js` (BL-005), `src/shout.js` (BL-003), and `src/farewell.js` (BL-004) are separate items and must not be changed by this one.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `countdown` from `src/countdown.js`.
- Render the integers from a supplied positive integer `n` down to `1` as a single string joined by `, `.
- Cover the behavior with an automated test that runs under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to any CLI entry point; that is owned by another item.
- Changes to `src/wave.js`, `src/shout.js`, `src/farewell.js`, or reuse of their helpers.
- Defining behavior for `n` below `1`, non-integer `n`, or missing/non-number input; the item supplies `n = 3` and does not specify validation or edge-case behavior.
- Localisation, configurable separators, or a timer/callback-based countdown; the item requires only a returned string.

## Decisions

### Standalone module instead of composing with an existing helper

`src/countdown.js` will build the sequence directly rather than importing any existing helper.

- **Rationale:** The item requires the other helpers to remain unchanged, and a countdown sequence is a distinct behavior. The existing helpers format names into fixed messages and do not provide a reusable descending-sequence primitive.
- **Alternative considered:** Compose the result from an existing greeting or wave helper. Rejected because those helpers produce fixed messages with no descending-sequence behavior.

### Build the sequence, then join once

The helper will collect the integers from `n` down to `1` in order and join them with `, `.

- **Rationale:** Joining an ordered sequence yields exactly the required `3, 2, 1` form, with separators only between entries and no leading or trailing separator. It also keeps multi-digit integers intact.
- **Alternative considered:** Concatenate entries in a loop while appending the separator conditionally. Rejected because joining is simpler and less error-prone at the sequence boundaries.

### Test with the project's built-in runner

Add `src/test/countdown.test.js` using `node:test` and `node:assert/strict`, matching the existing tests.

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [Sequence formatting could gain a leading or trailing separator] → Assert the complete string for `countdown(3)` and assert the single-entry result for `countdown(1)`.
- [Behavior for `n` below `1` or non-integer input is undefined] → Keep such input out of scope, as the item does not specify it. Validation or clamping can be specified separately if required later.
- [Tests might only check a substring] → Include exact-output assertions so ordering and separators are both verified.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
