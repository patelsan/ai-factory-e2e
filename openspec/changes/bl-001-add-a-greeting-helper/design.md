# Design

## Context

See `proposal.md` for motivation. Constraints that shape the approach:

- `package.json` sets `"type": "module"`, and the only existing source file (`src/test/smoke.test.js`) uses ESM imports.
- `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm; `docs/architecture/overview.md` states the project has no external dependencies.
- `docs/development.md` defines the only verification command, `npm test`, which maps to `node --test`.
- There are no ADRs in this repository, so no additional decision is binding.
- BL-002 (`docs/backlog/items/BL-002-use-greeting.md`) will consume this helper from `src/cli.js`, so the surface added here must be importable without side effects.

## Goals / Non-Goals

**Goals:**

- Satisfy the `greeting` capability with one small, side-effect-free module and test coverage that runs under `npm test`.
- Keep the helper usable by BL-002 without any CLI change in this item.

**Non-Goals:**

- Printing to stdout, reading argv, or otherwise touching `src/cli.js` (BL-002).
- Input validation, normalisation, trimming, localisation or name pluralisation: no authoritative document defines behavior outside the greeting message in `specs/greeting/spec.md`, so none is invented here.
- Adding dependencies, changing CI, `package.json`, repository settings or secrets.

## Decisions

### Decision: ESM module with a single named export

`src/greeting.js` exports `function greet(name)`. Consumers use `import { greet } from "./greeting.js"`.

- Rationale: matches `"type": "module"` and the existing import style; a named export keeps the surface explicit.
- Alternatives considered: a default export (less discoverable, awkward when the module grows for BL-002's needs); CommonJS (incompatible with the repository's module type).

### Decision: Build the message from a fixed prefix, the name and a fixed suffix

`greet` returns `` `Hello, ${name}!` `` — no trimming, case conversion or escaping.

- Rationale: the spec requires the name verbatim; a template literal states that directly and has no error paths for the documented input.
- Alternatives considered: string concatenation (equivalent, less readable); normalising the name (would contradict the "verbatim" requirement and invent unspecified behavior).

### Decision: Co-locate the test with the existing test directory and runner

Add `src/test/greeting.test.js` using `node:test` and `node:assert/strict`, asserting each scenario in `specs/greeting/spec.md`.

- Rationale: `node --test` already discovers files under `src/test/` (as proven by `smoke.test.js`), and `docs/development.md` names `npm test` as the verification path.
- Alternatives considered: a separate test directory or a new test script (would require `package.json` churn for no benefit).

### Decision: Leave out-of-contract inputs unspecified

The spec and tests cover names supplied as strings. Empty strings, non-string values and other edge cases are intentionally not specified or asserted, because no authoritative document defines them and adding rules would broaden scope.

- Consequence: when BL-002 or a later item needs that behavior, it becomes its own requirement with its own scenarios.

## Risks / Trade-offs

- [BL-002 couples to the export name and signature] → Keep `greet` side-effect-free and documented in this design; changing its shape later would be a requirement change, not a refactor.
- [Tests only cover the documented scenarios] → Acceptable for a spec-driven change; any new behavior must arrive as a spec delta first.
- [Name interpolation is unvalidated, so ambiguous input flows straight into the message] → Intentional per the Non-Goals above; no consumer in this change passes unvalidated input.
- [New test could be silently skipped by the runner] → `npm test` must report the new test file running, which the tasks check explicitly.

## Migration Plan

Additive change: one new module and one new test file. No data, configuration or API migration. Rollback is reverting the phase commit/PR; nothing else depends on the helper until BL-002 lands.

## Open Questions

None.
