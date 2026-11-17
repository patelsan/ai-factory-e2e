# Proposal

## Why

The repository currently has no greeting behavior, so nothing can greet a supplied name. `docs/product/requirements.md` records that BL-001 adds a greeting helper, and BL-002 depends on that helper to print a greeting from the CLI. Delivering the helper first gives BL-002 a tested, reusable behavior to build on.

See `docs/backlog/items/BL-001-greeting-helper.md` for the bounded intent.

## What Changes

- Introduce a greeting behavior that turns a supplied name into the message `Hello, <name>!`.
- Expose that behavior from a small module, `src/greeting.js`, as `greet(name)`, so later items can reuse it without going through the CLI.
- Add automated coverage for the greeting behavior using the built-in Node.js test runner, matching the existing `src/test/` convention.
- No breaking changes: nothing existing changes behavior, and no external dependencies are added.

## Capabilities

### New Capabilities

- `greeting`: composes the greeting message for a supplied name and makes that message available to other parts of the system.

### Modified Capabilities

None. `openspec list --specs` reports no existing specs, so no requirement is being modified.

## Impact

- New code: `src/greeting.js` (ES module named export `greet`).
- New test: `src/test/greeting.test.js`, picked up by the existing `npm test` (`node --test`) script.
- Unaffected: `src/cli.js` and CLI output (deferred to BL-002), `src/test/smoke.test.js`, `package.json`, CI workflow, repository settings and secrets.
- Dependencies: none; `docs/architecture/tech-stack.md` pins Node.js 26, the built-in test runner and npm.
- API: consumers import `greet` from `src/greeting.js`; BL-002 is the first planned consumer.
