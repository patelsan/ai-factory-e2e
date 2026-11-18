# Proposal

## Why

BL-004 adds a small, independently testable farewell helper so callers can render a closing message without changing the existing greeting behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, or BL-003.

See `docs/backlog/items/BL-004-farewell-helper.md` for the bounded intent.

## What Changes

- Introduce a farewell behavior that renders a supplied name as `Goodbye, <name>!`.
- Expose that behavior from a small module, `src/farewell.js`, as `farewell(name)`, implemented standalone so it does not depend on any other helper.
- Preserve the supplied name exactly, without uppercasing or otherwise changing its case.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/greeting.js`, `src/cli.js`, and `src/shout.js` remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `farewell`: composes a deterministic farewell message for a supplied name and makes that message available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `uppercase-greeting` spec, whose requirements are not changing.

## Impact

- New code: `src/farewell.js` (ES module named export `farewell`), implemented in a later phase, not by this proposal.
- New test: `src/test/farewell.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/greeting.js` (BL-001), `src/cli.js` and CLI output (BL-002), `src/shout.js` and `src/test/shout.test.js` (BL-003), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `farewell` from `src/farewell.js`.
