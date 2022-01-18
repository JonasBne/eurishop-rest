import sortBy from "./sortBy";

const data = [
  { id: 1, name: "test" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
];

describe("sortBy function sorts data", () => {
  test("Array length is equal before and after sorting", () => {
    const result = sortBy(data, "");
    expect(result.length).toBe(4);
  });
  test("data is sorted in an ascending way when there is no sort expression", () => {
    const result = sortBy(data, "");
    expect(result[0].id).toBe(1);
  });

  test("data is sorted in a descending way when there is a - sign in the sort expression", () => {
    const result = sortBy(data, "-name");
    expect(result[0].id).toBe(4);
  });
  test("data is sorted in an ascending way when there is a + sign in the sort expression", () => {
    const result = sortBy(data, "+name");
    expect(result[0].id).toBe(1);
  });
});
