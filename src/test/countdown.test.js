import test from "node:test";
import assert from "node:assert/strict";
import { countdown } from "../countdown.js";

test("Countdown from three", () => {
  assert.equal(countdown(3), "3, 2, 1");
});

test("Countdown from one has no separator", () => {
  assert.equal(countdown(1), "1");
});
