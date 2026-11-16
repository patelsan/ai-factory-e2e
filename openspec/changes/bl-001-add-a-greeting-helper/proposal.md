# Proposal

## Why

BL-001 is the first M1 deliverable: the project needs a single, reusable way to
produce a greeting for a supplied name. Defining that behavior once, with a
test, establishes the contract that BL-002 will consume from the CLI instead of
duplicating greeting text.

## What Changes

- Add a greeting helper module at `src/greeting.js` that exports `greet(name)`.
- `greet(name)` returns the greeting string `Hello, <name>!` for the supplied
  name.
- Add an automated test covering the greeting output, using the repository's
  built-in Node.js test runner.

## Capabilities

### New Capabilities

- `greeting`: Formats a greeting for a supplied name.

### Modified Capabilities

<!-- None: no existing capability's requirements change. -->

## Impact

- New code: `src/greeting.js`.
- New tests: a test file under `src/test/`.
- No changes to existing modules, public CLI behavior, dependencies, or CI.
