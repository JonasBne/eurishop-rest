/* eslint-disable @typescript-eslint/no-unused-vars */
import sortby from "./sortBy";

describe("my first test", () => {
  test("test", () => {
    const data = [
      { id: 1, name: "test" },
      { id: 2, name: "test2" },
    ];

    const result = sortby(data, "name");
    expect(result.length).toBe(2);
  });
});
