# Design

## Context

See `proposal.md` for motivation and `specs/farewell/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the existing source and test files use ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs in this repository, so no additional decision is binding.
- BL-001 (`src/greeting.js`), BL-002 (`src/cli.js`) and BL-003 (`src/shout.js`) are separate items and must not be changed by this one.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `farewell` from `src/farewell.js`.
- Render the supplied name inside the fixed `Goodbye, <name>!` template while preserving its case.
- Cover the behavior with an automated test that runs under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to `src/cli.js` (owned by BL-002).
- Changes to `src/greeting.js`, `src/shout.js`, or reuse of their helpers.
- Uppercasing, lowercasing, or any other transformation of the supplied name.
- Defining behavior for missing, empty, or non-string input; the item supplies a name and does not specify validation.
- Trimming, localisation, or other normalisation of names.

## Decisions

### Standalone module instead of composing with an existing helper

`src/farewell.js` will implement the template directly rather than importing the greeting or shout helper.

- **Rationale:** The item requires the other helpers to remain unchanged, and a farewell message is a distinct behavior. Importing an existing helper would create an undeclared coupling without reducing meaningful duplication.
- **Alternative considered:** Compose the message from a shared greeting or shout helper. Rejected because the template differs and the item explicitly limits scope to a new farewell helper.

### Preserve the supplied name exactly

The helper will interpolate the supplied name into the fixed template without changing its case.

- **Rationale:** The required output is `Goodbye, <name>!`, so the name appears exactly as supplied. Case conversion would contradict the contract.
- **Alternative considered:** Reuse `toUpperCase()` from the shout behavior. Rejected because the farewell contract does not request uppercase output.

### Test with the project's built-in runner

Add `src/test/farewell.test.js` using `node:test` and `node:assert/strict`, matching the existing tests.

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [Format duplication with the greeting and shout helpers] → Keep the helper small and independently tested. A later refactor can extract shared formatting once scope permits it.
- [No input validation] → Callers must pass a string name, as described by the item. Validation behavior can be specified separately if required later.
- [Tests might assert only the message text and miss punctuation] → Include an exact-output assertion so spacing, comma, and exclamation mark are all verified.
- [Case preservation could be broken by a future refactor] → Include a mixed-case name in the coverage so a case conversion regression is caught.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
