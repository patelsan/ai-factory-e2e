# countdown Specification

## Purpose

Provide a deterministic countdown for a supplied positive integer so callers can render a descending sequence without changing the existing greeting, uppercase-greeting, wave, or farewell behaviors.

## Requirements

### Requirement: Countdown output

The system SHALL produce a countdown for a supplied integer `n` greater than or equal to `1` as the integers from `n` down to `1`, in descending order, joined by `, ` (a comma followed by a single space).

#### Scenario: Countdown from three

- **WHEN** a caller requests a countdown for `3`
- **THEN** the result is `3, 2, 1`

#### Scenario: Countdown from one has no separator

- **WHEN** a caller requests a countdown for `1`
- **THEN** the result is exactly `1`, with no leading or trailing `, ` separator
