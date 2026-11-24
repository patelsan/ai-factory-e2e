import test from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../slugify.js";

test("Lowercase hyphen-separated slug", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("Whitespace runs and edges produce a single internal hyphen", () => {
  assert.equal(slugify("  Hello   World  "), "hello-world");
});
