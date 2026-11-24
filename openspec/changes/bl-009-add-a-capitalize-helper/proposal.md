# Proposal

## Why

BL-009 adds a small, independently testable capitalize helper so callers can uppercase the first character of a supplied text without changing the existing greeting, uppercase-greeting, farewell, wave, countdown, repeat, or slugify behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, BL-003, BL-004, BL-005, BL-006, BL-007, or BL-008.

See `docs/backlog/items/BL-009-capitalize-helper.md` for the bounded intent.

## What Changes

- Introduce a capitalize behavior that renders a supplied text with its first character uppercased.
- Expose that behavior from a small module, `src/capitalize.js`, as `capitalize(text)`, implemented standalone so it does not depend on any other helper.
- Preserve the remaining characters unchanged, without lowercasing or otherwise normalizing them.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/slugify.js`, `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, and the behavior owned by other items remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `capitalize`: produces a deterministic string with the first character uppercased for a supplied text, and makes that text available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `countdown`, `farewell`, `repeat`, `slugify`, `uppercase-greeting`, and `wave` specs, whose requirements are not changing.

## Impact

- New code: `src/capitalize.js` (ES module named export `capitalize`), implemented in a later phase, not by this proposal.
- New test: `src/test/capitalize.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/slugify.js` (BL-007), `src/repeat.js` (BL-008), `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), `src/farewell.js` (BL-004), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Not in scope: CLI wiring or any change to a CLI entry point; that is owned by other items.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `capitalize` from `src/capitalize.js`.
