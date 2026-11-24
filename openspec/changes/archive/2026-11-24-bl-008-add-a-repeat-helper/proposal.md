# Proposal

## Why

BL-008 adds a small, independently testable repeat helper so callers can render a supplied text a requested number of times without changing the existing greeting, uppercase-greeting, farewell, wave, or countdown behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, BL-003, BL-004, BL-005, BL-006, or BL-007.

See `docs/backlog/items/BL-008-repeat-helper.md` for the bounded intent.

## What Changes

- Introduce a repeat behavior that renders a supplied text repeated `n` times, joined by a single space.
- Expose that behavior from a small module, `src/repeat.js`, as `repeatText(text, n)`, implemented standalone so it does not depend on any other helper.
- Preserve the supplied text exactly, without case conversion, trimming, or other normalisation.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, and the behavior owned by other items remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `repeat`: produces deterministic repeated text for a supplied text and positive count, and makes that text available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `countdown`, `farewell`, `uppercase-greeting`, and `wave` specs, whose requirements are not changing.

## Impact

- New code: `src/repeat.js` (ES module named export `repeatText`), implemented in a later phase, not by this proposal.
- New test: `src/test/repeat.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), `src/farewell.js` (BL-004), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `repeatText` from `src/repeat.js`.
