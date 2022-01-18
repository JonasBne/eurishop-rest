import sortBy from "./sortBy";

const data = [
  { id: 1, name: "test2", description: "C" },
  { id: 2, name: "test3", description: "A" },
  { id: 3, name: "test4", description: "D" },
  { id: 4, name: "test", description: "B" },
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
    const result = sortBy(data, "-description");
    expect(result[0].id).toBe(3);
  });
  test("data is sorted in a descending way when there is a - sign in the sort expression", () => {
    const result = sortBy(data, "-name");
    expect(result[0].id).toBe(3);
  });
  test("data is sorted in an ascending way when there is a + sign in the sort expression", () => {
    const result = sortBy(data, "+description");
    expect(result[0].id).toBe(2);
  });
  test("data is sorted in an ascending way when there is a + sign in the sort expression", () => {
    const result = sortBy(data, "+name");
    expect(result[0].id).toBe(4);
  });
  test("Array length and order remains unchanged when the sort expression is null", () => {
    const result = sortBy(data, null);
    expect(result.length).toBe(4);
    expect(result[0].id).toBe(1);
  });
  test("Array length and order remains unchanged when the sort expression is undefined", () => {
    const result = sortBy(data, undefined);
    expect(result.length).toBe(4);
    expect(result[0].id).toBe(1);
  });
  test("Everything keeps running when an empty array is passed into the sortBy function", () => {
    const result = sortBy([], undefined);
    expect(result.length).toBe(0);
  });
});
