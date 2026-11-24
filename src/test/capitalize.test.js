import test from "node:test";
import assert from "node:assert/strict";
import { capitalize } from "../capitalize.js";

test("Lowercase first character is uppercased", () => {
  assert.equal(capitalize("hello"), "Hello");
});

test("Remaining characters are preserved", () => {
  assert.equal(capitalize("hello world"), "Hello world");
});

test("Already-uppercase first character is preserved", () => {
  assert.equal(capitalize("Hello"), "Hello");
});
