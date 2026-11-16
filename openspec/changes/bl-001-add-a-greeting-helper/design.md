# Design

## Context

See `proposal.md` for motivation. The repository is a small ESM Node.js project
(`"type": "module"`) with no external dependencies. Tests run with the built-in
runner via `npm test` (`node --test`), and the existing `src/test/smoke.test.js`
already establishes the `node:test` + `node:assert/strict` style.

## Goals / Non-Goals

**Goals:**

- Provide the greeting behavior from `specs/greeting/spec.md` as a small,
  importable module with a narrow public surface.
- Cover the behavior with an automated test that runs under `npm test`.

**Non-Goals:**

- Wiring the helper into the CLI (that is BL-002).
- Input validation, normalization, localization, or alternate greeting formats;
  the documents do not specify them.
- Adding dependencies, build steps, or CI changes.

## Decisions

- **ES module with a named export.** `src/greeting.js` exports `greet` as a
  named export. This matches the package module type and lets BL-002 import it
  without default-export conventions. Alternative considered: CommonJS, which
  conflicts with `"type": "module"`.
- **Template-literal formatting.** `greet(name)` returns `` `Hello, ${name}!` ``.
  This produces the exact required output and avoids string concatenation or a
  formatting dependency. Alternative considered: `String.prototype.replace`,
  which is unnecessary for one substitution.
- **Built-in test runner.** Add `src/test/greeting.test.js` using `node:test`
  and `node:assert/strict`, consistent with the smoke test. `node --test`
  discovers it with no configuration or dependency changes. Alternative
  considered: an external assertion library, which would add a dependency for
  no benefit.
- **No input validation.** BL-001 specifies only the greeting for a supplied
  name; validating or rejecting values would add unspecified behavior. If a
  later item requires it, it can be added as its own requirement.

## Risks / Trade-offs

- [Implicit coercion for non-string input] → Out of scope for BL-001; the spec
  only defines behavior for a supplied name, and adding validation would be an
  unsolicited product decision.
- [Test file location is inferred] → Place it beside the existing test under
  `src/test/`, which `node --test` already discovers; no config change needed.

## Migration Plan

Additive change only. No migration or rollback steps are required; reverting
the added files restores the previous state.
