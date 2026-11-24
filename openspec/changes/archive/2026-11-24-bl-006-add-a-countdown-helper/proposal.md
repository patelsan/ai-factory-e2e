# Proposal

## Why

BL-006 adds a small, independently testable countdown helper so callers can render a descending integer sequence without changing the existing greeting, uppercase-greeting, wave, or farewell behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, BL-003, BL-004, or BL-005.

See `docs/backlog/items/BL-006-countdown-helper.md` for the bounded intent.

## What Changes

- Introduce a countdown behavior that renders the integers from a supplied `n` down to `1`, joined by `, ` (a comma followed by a single space).
- Expose that behavior from a small module, `src/countdown.js`, as `countdown(n)`, implemented standalone so it does not depend on any other helper.
- Preserve the integers in descending order without adding a leading or trailing separator.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/wave.js`, `src/shout.js`, `src/farewell.js`, and the behavior owned by other items remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `countdown`: produces a deterministic descending integer sequence for a supplied positive integer and makes that sequence available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `farewell`, `uppercase-greeting`, and `wave` specs, whose requirements are not changing.

## Impact

- New code: `src/countdown.js` (ES module named export `countdown`), implemented in a later phase, not by this proposal.
- New test: `src/test/countdown.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/wave.js` (BL-005), `src/shout.js` (BL-003), `src/farewell.js` (BL-004), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `countdown` from `src/countdown.js`.
