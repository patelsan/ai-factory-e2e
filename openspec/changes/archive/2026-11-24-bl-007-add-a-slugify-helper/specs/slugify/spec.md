# Spec Delta

## Purpose

Provide a deterministic lowercase, hyphen-separated slug for supplied text so callers can render a URL- and identifier-friendly form without changing the existing greeting, uppercase-greeting, farewell, wave, countdown, or repeat behaviors.

## ADDED Requirements

### Requirement: Slug output

The system SHALL produce a slug for a supplied `text` by lowercasing it and joining its whitespace-separated words with exactly one hyphen (`-`) between words, with no leading or trailing hyphen.

#### Scenario: Lowercase hyphen-separated slug

- **WHEN** a caller requests a slug for the text `Hello World`
- **THEN** the result is `hello-world`

#### Scenario: Whitespace runs and edges produce a single internal hyphen

- **WHEN** a caller requests a slug for the text `  Hello   World  `
- **THEN** the result is exactly `hello-world`, with no leading or trailing hyphen and no repeated hyphen for the run of spaces
