import test from "node:test";
import assert from "node:assert/strict";
import { repeatText } from "../repeat.js";

test("Three repetitions", () => {
  assert.equal(repeatText("ha", 3), "ha ha ha");
});

test("Single repetition has no separator", () => {
  assert.equal(repeatText("ha", 1), "ha");
});
