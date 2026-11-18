import test from "node:test";
import assert from "node:assert/strict";
import { farewell } from "../farewell.js";

test("Name is rendered as supplied", () => {
  assert.equal(farewell("Ada Lovelace"), "Goodbye, Ada Lovelace!");
});

test("Exact punctuation and spacing are used", () => {
  assert.equal(farewell("sam"), "Goodbye, sam!");
});
