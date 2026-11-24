# Proposal

## Why

BL-005 adds a small, independently testable wave helper so callers can render a friendly greeting without changing the existing greeting, uppercase-greeting, or farewell behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, BL-003, or BL-004.

See `docs/backlog/items/BL-005-wave-helper.md` for the bounded intent.

## What Changes

- Introduce a wave behavior that renders a supplied name as `Hello there, <name>!`.
- Expose that behavior from a small module, `src/wave.js`, as `wave(name)`, implemented standalone so it does not depend on any other helper.
- Preserve the supplied name exactly, without uppercasing, lowercasing, or otherwise changing its case.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/shout.js`, `src/farewell.js`, and the behavior owned by other items remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `wave`: composes a deterministic wave message for a supplied name and makes that message available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `farewell` and `uppercase-greeting` specs, whose requirements are not changing.

## Impact

- New code: `src/wave.js` (ES module named export `wave`), implemented in a later phase, not by this proposal.
- New test: `src/test/wave.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/shout.js` (BL-003), `src/farewell.js` (BL-004), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `wave` from `src/wave.js`.
