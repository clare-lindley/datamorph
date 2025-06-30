import { describe, it, expect } from "vitest";
import flattenArray from "./flatten-array.js";

describe("flattenArray", () => {
  it("flattens a nested array", () => {
    expect(flattenArray([1, 2, [3, 4, [5]]])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns an empty array when given an empty array", () => {
    expect(flattenArray([])).toEqual([]);
  });

  it("returns the same array if already flat", () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
