# wave Specification

## Purpose
Provide a deterministic wave message for a supplied name so callers can render a friendly greeting without changing the existing greeting, uppercase-greeting, or farewell behaviors.

## Requirements

### Requirement: Wave output

The system SHALL produce a wave message for a supplied name in the form `Hello there, <name>!`, preserving the supplied name's case.

#### Scenario: Name is rendered as supplied

- **WHEN** a caller requests a wave message for the name `Ada Lovelace`
- **THEN** the result is `Hello there, Ada Lovelace!`

#### Scenario: Exact punctuation and spacing are used

- **WHEN** a caller requests a wave message for the name `sam`
- **THEN** the result is exactly `Hello there, sam!`, with the space between `Hello` and `there`, the comma, the single space after the comma, and the trailing exclamation mark in those positions
