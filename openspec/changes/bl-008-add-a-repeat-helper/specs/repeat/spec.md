# Spec Delta

## Purpose

Provide deterministic repeated text for supplied text and a positive count so callers can render a repeated sequence without changing the existing greeting, uppercase-greeting, farewell, wave, or countdown behaviors.

## ADDED Requirements

### Requirement: Repeated text output

The system SHALL produce a string containing the supplied `text` repeated a supplied integer `n` greater than or equal to `1` times, with each repetition separated by exactly one space (` `) and with no leading or trailing separator, preserving the supplied text unchanged.

#### Scenario: Three repetitions

- **WHEN** a caller requests the text `ha` repeated `3` times
- **THEN** the result is `ha ha ha`

#### Scenario: Single repetition has no separator

- **WHEN** a caller requests the text `ha` repeated `1` time
- **THEN** the result is exactly `ha`, with no leading or trailing space
