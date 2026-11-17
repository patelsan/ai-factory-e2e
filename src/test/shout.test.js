import test from "node:test";
import assert from "node:assert/strict";
import { shout } from "../shout.js";

test("Mixed-case name is uppercased", () => {
  assert.equal(shout("Ada Lovelace"), "HELLO, ADA LOVELACE!");
});

test("Already-uppercase name is preserved", () => {
  assert.equal(shout("GRACE"), "HELLO, GRACE!");
});

test("Exact punctuation and spacing are used", () => {
  assert.equal(shout("sam"), "HELLO, SAM!");
});
