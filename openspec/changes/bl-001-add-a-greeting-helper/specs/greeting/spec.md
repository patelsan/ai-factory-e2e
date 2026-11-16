# Spec Delta

## Purpose

Provides one reusable way to format a greeting for a supplied name so that
callers share the same greeting text instead of duplicating it.

## ADDED Requirements

### Requirement: Greeting formatting

The greeting helper SHALL return the string `Hello, <name>!` for a supplied
name, substituting the name exactly as provided.

#### Scenario: Greet a named person

- **WHEN** the greeting helper is called with the name `Ada`
- **THEN** it returns `Hello, Ada!`

#### Scenario: Preserve the supplied name

- **WHEN** the greeting helper is called with the name `Grace Hopper`
- **THEN** it returns `Hello, Grace Hopper!`
