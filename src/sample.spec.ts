/* eslint-disable @typescript-eslint/no-unused-vars */
import path from "path";

const sortby = (ar: any[], expression: string) => {
  return ar;
};

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
