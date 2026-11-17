# Proposal

## Why

BL-003 adds a small, independently testable uppercase greeting helper so callers can render an emphatic greeting without changing the existing greeting helper. It is part of the first delivery milestone and must not alter the behavior owned by BL-001 or BL-002.

See `docs/backlog/items/BL-003-uppercase-greeting.md` for the bounded intent.

## What Changes

- Introduce an uppercase greeting behavior that turns a supplied name into the message `HELLO, <NAME>!`.
- Expose that behavior from a small module, `src/shout.js`, as `shout(name)`, implemented standalone so it does not depend on BL-001's helper.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/greeting.js`, `src/cli.js`, and the behavior planned by BL-001 and BL-002 remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `uppercase-greeting`: composes an all-uppercase greeting message for a supplied name and makes that message available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports no existing specs, so no requirement is being modified.

## Impact

- New code: `src/shout.js` (ES module named export `shout`), implemented in a later phase, not by this proposal.
- New test: `src/test/shout.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/greeting.js` (BL-001), `src/cli.js` and CLI output (BL-002), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `shout` from `src/shout.js`.
