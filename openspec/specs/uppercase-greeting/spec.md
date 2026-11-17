# uppercase-greeting Specification

## Purpose
Provide a deterministic uppercase greeting for a supplied name so callers can render an emphatic greeting without changing the existing greeting behavior.

## Requirements

### Requirement: Uppercase greeting output

The system SHALL produce a greeting for a supplied name in the form `HELLO, <NAME>!`, with the supplied name and the complete greeting rendered in uppercase.

#### Scenario: Mixed-case name is uppercased

- **WHEN** a caller requests a greeting for the name `Ada Lovelace`
- **THEN** the result is `HELLO, ADA LOVELACE!`

#### Scenario: Already-uppercase name is preserved

- **WHEN** a caller requests a greeting for the name `GRACE`
- **THEN** the result is `HELLO, GRACE!`

#### Scenario: Exact punctuation and spacing are used

- **WHEN** a caller requests a greeting for the name `sam`
- **THEN** the result is exactly `HELLO, SAM!`, with the comma, single space, and trailing exclamation mark in those positions
