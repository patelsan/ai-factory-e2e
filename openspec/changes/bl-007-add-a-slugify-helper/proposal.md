# Proposal

## Why

BL-007 adds a small, independently testable slugify helper so callers can turn a supplied text into a lowercase, hyphen-separated slug without changing the existing greeting, uppercase-greeting, farewell, wave, countdown, or repeat behaviors. It is part of the first delivery milestone and must not alter the scope owned by BL-001, BL-002, BL-003, BL-004, BL-005, BL-006, or BL-008.

See `docs/backlog/items/BL-007-slugify-helper.md` for the bounded intent.

## What Changes

- Introduce a slugify behavior that renders a supplied text as a lowercase slug with words separated by single hyphens.
- Expose that behavior from a small module, `src/slugify.js`, as `slugify(text)`, implemented standalone so it does not depend on any other helper.
- Lowercase the supplied text and join its words with `-`, with no leading or trailing hyphen and no repeated hyphen for a run of whitespace.
- Add automated coverage for the behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: `src/repeat.js`, `src/countdown.js`, `src/wave.js`, `src/shout.js`, `src/farewell.js`, and the behavior owned by other items remain untouched, and no external dependencies are added.

## Capabilities

### New Capabilities

- `slugify`: produces a deterministic lowercase, hyphen-separated slug for a supplied text, and makes that text available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports only the existing `countdown`, `farewell`, `repeat`, `shout`, `uppercase-greeting`, and `wave` specs, whose requirements are not changing.

## Impact

- New code: `src/slugify.js` (ES module named export `slugify`), implemented in a later phase, not by this proposal.
- New test: `src/test/slugify.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/repeat.js` (BL-008), `src/countdown.js` (BL-006), `src/wave.js` (BL-005), `src/shout.js` (BL-003), `src/farewell.js` (BL-004), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Not in scope: CLI wiring or any change to a CLI entry point; that is owned by other items.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `slugify` from `src/slugify.js`.
