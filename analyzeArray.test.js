import { analyzeArray } from "./analyzeArray";

test("analyzeArray", () => {
  const object = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(object);
});

test("not allow null", () => {
    expect(analyzeArray()).not.toBeNull();
  });
