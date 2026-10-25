
import { cleanInput } from "../repl.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "HELLO WORLD",
    expected: ["hello", "world"],
  },
  {
    input: "JavaScript",
    expected: ["javascript"],
  },
  {
    input: "Hello WoRLd",
    expected: ["hello", "world"],
  },
  {
    input: "  ",
    expected: [],
  },
])("cleanInput($input)", ({ input, expected }) => {

  test(`Expected: ${expected}`, () => {

    // 1. Execute the function we're testing
    const result = cleanInput(input);

    // 2. Verify the result has the expected number of elements
    expect(result).toHaveLength(expected.length);

    // 3. Verify each element matches the expected value
    for (const i in expected) {
      expect(result[i]).toBe(expected[i]);
    }

  });
});
