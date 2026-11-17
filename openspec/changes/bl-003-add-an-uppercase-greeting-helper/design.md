# Design

## Context

See `proposal.md` for motivation and `specs/uppercase-greeting/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the only existing source file (`src/test/smoke.test.js`) uses ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs in this repository, so no additional decision is binding.
- BL-001 (`src/greeting.js`) and BL-002 (`src/cli.js`) are not implemented in this worktree and must not be changed by this item.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `shout` from `src/shout.js`.
- Uppercase the supplied name and render it inside the fixed `HELLO, <NAME>!` template.
- Cover the behavior with an automated test that runs under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to `src/cli.js` (owned by BL-002).
- Changes to `src/greeting.js` or reuse of an unimplemented greeting helper (owned by BL-001).
- Defining behavior for missing, empty, or non-string input; the item supplies a name and does not specify validation.
- Locale-specific casing rules, trimming, or other normalization beyond JavaScript's standard uppercase conversion.

## Decisions

### Standalone module instead of composing with the greeting helper

`src/shout.js` will implement the template directly rather than importing a greeting helper.

- **Rationale:** BL-001 is out of scope and may not exist yet. Importing it would create an undeclared dependency and could require changes to BL-001 or BL-002.
- **Alternative considered:** Uppercase the result of a shared greeting helper. Rejected because it couples BL-003 to unimplemented, out-of-scope code and would violate the item's isolation constraint.

### Uppercase the name, then interpolate

The helper will convert the supplied name with `toUpperCase()` and place it in the fixed uppercase template.

- **Rationale:** This directly satisfies the required output, keeps the punctuation fixed, and avoids relying on the platform's handling of the surrounding punctuation.
- **Alternative considered:** Uppercase the entire composed string. Rejected as unnecessary work; the template is already uppercase, so only the variable input needs conversion.

### Test with the project's built-in runner

Add `src/test/shout.test.js` using `node:test` and `node:assert/strict`, matching the existing smoke test.

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [Uppercase conversion is locale-insensitive] → The spec's scenarios use names that behave consistently with standard `toUpperCase()`. Locale-specific casing is explicitly out of scope; add it only if a future requirement demands it.
- [Format duplication with a future greeting helper] → Keep the helper small and independently tested. A later refactor can extract shared formatting once BL-001 and BL-002 exist and their scope permits it.
- [No input validation] → Callers must pass a string name, as described by the item. Validation behavior can be specified separately if required later.
- [Tests might assert only the uppercase result and miss punctuation] → Include an exact-output assertion so spacing, comma, and exclamation mark are all verified.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
