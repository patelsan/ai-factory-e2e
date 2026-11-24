# capitalize Specification

## Purpose

Provide a deterministic capitalize behavior for supplied text so callers can uppercase the first character without changing the existing greeting, uppercase-greeting, farewell, wave, countdown, repeat, or slugify behaviors.

## Requirements

### Requirement: First-character capitalization

For supplied text with at least one character, the system SHALL produce a string containing the supplied `text` with its first character converted to uppercase and all remaining characters preserved unchanged.

#### Scenario: Lowercase first character is uppercased

- **WHEN** a caller requests capitalization for the text `hello`
- **THEN** the result is `Hello`

#### Scenario: Remaining characters are preserved

- **WHEN** a caller requests capitalization for the text `hello world`
- **THEN** the result is `Hello world`, with only the first character uppercased and the remainder unchanged

#### Scenario: Already-uppercase first character is preserved

- **WHEN** a caller requests capitalization for the text `Hello`
- **THEN** the result is `Hello`
