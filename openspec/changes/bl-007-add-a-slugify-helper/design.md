# Design

## Context

See `proposal.md` for motivation and `specs/slugify/spec.md` for the behavior contract. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the existing source and test files use ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`; `.github/workflows/ci.yml` runs the same command on Node.js 26.
- There are no ADRs or contract documents in this repository, so no additional decision is binding.
- `src/repeat.js` (BL-008), `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), and `src/farewell.js` (BL-004) are separate items and must not be changed by this one.

## Goals / Non-Goals

**Goals:**

- Provide a named ESM export `slugify` from `src/slugify.js`.
- Render the supplied text as a lowercase slug whose words are joined by a single `-`, with no leading or trailing hyphen.
- Cover the behavior and its word-separation boundary with automated tests that run under the existing `npm test` command.

**Non-Goals:**

- CLI wiring or changes to any CLI entry point; that is owned by another item.
- Changes to `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, or reuse of their helpers.
- Punctuation stripping, diacritic/transliteration handling, locale-specific casing, or slug uniqueness: the item specifies only lowercase, hyphen-separated output.
- Defining behavior for missing, empty, or non-string `text`; the item does not specify validation or error behavior.

## Decisions

### Standalone module instead of composing with an existing helper

`src/slugify.js` will build the slug directly rather than importing any existing helper.

- **Rationale:** The item requires the other helpers to remain unchanged, and slugging is a distinct behavior. The existing helpers format names or sequences into fixed messages and provide no text-to-slug primitive.
- **Alternative considered:** Compose the result from the repeat or uppercase-greeting helper. Rejected because those helpers produce fixed messages or repeated text with spaces, not lowercase hyphen-separated words.

### Lowercase, split on whitespace runs, and join with a single hyphen

The helper will lowercase the supplied text, split it into words at whitespace (with surrounding whitespace ignored), and join the words with one hyphen.

- **Rationale:** `Hello World` lowercases to `hello world`, and splitting on whitespace runs drops leading/trailing/inner extra spaces before joining, so the result has exactly one hyphen between words and none at the edges. This satisfies `slugify("Hello World") === "hello-world"` and keeps whitespace boundaries deterministic.
- **Alternative considered:** Replace whitespace with hyphens by regex only. Rejected because a naive replacement of a single space leaves repeated hyphens for runs of spaces and can leave a leading or trailing hyphen, contradicting the spec's single-hyphen requirement.

### Test with the project's built-in runner

Add `src/test/slugify.test.js` using `node:test` and `node:assert/strict`, matching the existing tests (for example `src/test/repeat.test.js`).

- **Rationale:** The project defines tests through `npm test` and has no test framework dependency.
- **Alternative considered:** Add a third-party assertion library. Rejected because the project explicitly has no external dependencies.

## Risks / Trade-offs

- [Output could keep the supplied case] → Assert the complete lowercase string for `slugify("Hello World")`.
- [Runs of spaces or surrounding spaces could yield `hello--world` or `-hello-world`] → Assert the complete string for input with runs and edge whitespace.
- [Punctuation, empty, or non-string inputs are undefined] → Keep such input out of scope, as the item does not specify it. Additional normalisation can be specified separately if required later.
- [Tests might only check a substring] → Include exact-output assertions so case, separator count, and edge trimming are all verified.

## Migration Plan

None. The change is additive: a new module and a new test file. Rollback is limited to removing those files. No data, configuration, or deployment migration is involved.

## Open Questions

None.
