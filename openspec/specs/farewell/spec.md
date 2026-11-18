# farewell Specification

## Purpose
Provide a deterministic farewell message for a supplied name so callers can render a closing message without changing the existing greeting behaviors.

## Requirements

### Requirement: Farewell output

The system SHALL produce a farewell for a supplied name in the form `Goodbye, <name>!`, preserving the supplied name's case.

#### Scenario: Name is rendered as supplied

- **WHEN** a caller requests a farewell for the name `Ada Lovelace`
- **THEN** the result is `Goodbye, Ada Lovelace!`

#### Scenario: Exact punctuation and spacing are used

- **WHEN** a caller requests a farewell for the name `sam`
- **THEN** the result is exactly `Goodbye, sam!`, with the comma, single space, and trailing exclamation mark in those positions
