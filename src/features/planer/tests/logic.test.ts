import { deepEqual } from "node:assert";
import { describe, it } from "node:test";
import { CapitalFirstLetter } from "../logic";

describe("", () => {
  it("one word", () => {
    const name = "slussen";
    const result = CapitalFirstLetter(name);
    deepEqual(result, "Slussen");
  });
  it("two word", () => {
    const name = "gamla stan";
    const result = CapitalFirstLetter(name);
    deepEqual(result, "Gamla Stan");
  });
});
