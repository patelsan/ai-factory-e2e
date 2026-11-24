import test from "node:test";
import assert from "node:assert/strict";
import { wave } from "../wave.js";

test("Name is rendered as supplied", () => {
  assert.equal(wave("Ada Lovelace"), "Hello there, Ada Lovelace!");
});

test("Exact punctuation and spacing are used", () => {
  assert.equal(wave("sam"), "Hello there, sam!");
});
