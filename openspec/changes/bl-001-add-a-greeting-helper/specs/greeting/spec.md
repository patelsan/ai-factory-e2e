# Spec Delta

## Purpose

Defines the greeting message the system composes for a supplied name, so every surface that greets a person produces identical, predictable text.

## ADDED Requirements

### Requirement: Greeting message for a supplied name

Given a person's name, the system SHALL produce the greeting message `Hello, <name>!`, where `<name>` is the supplied name inserted verbatim between the fixed prefix `Hello, ` and the terminal `!`.

#### Scenario: Greet a supplied name

- **WHEN** a greeting is requested for the name `Ada`
- **THEN** the resulting message is `Hello, Ada!`

#### Scenario: Preserve a name with internal spaces

- **WHEN** a greeting is requested for the name `Grace Hopper`
- **THEN** the resulting message is `Hello, Grace Hopper!`, with the name unchanged, including its internal space

#### Scenario: Preserve the supplied capitalisation

- **WHEN** a greeting is requested for the name `ada`
- **THEN** the resulting message is `Hello, ada!`, not a capitalised variant of the name
