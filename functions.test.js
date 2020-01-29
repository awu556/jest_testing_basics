const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should return a null value", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should check if the value is falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

describe("createUser", () => {
  test("Should return a user with the designated first and last name as an object", () => {
    expect(functions.createUser("Rob", "Gronk")).toEqual({
      firstName: "Rob",
      lastName: "Gronk"
    });

    expect(functions.createUser("Burt", "Reynolds")).toEqual({
      firstName: "Burt",
      lastName: "Reynolds"
    });

    expect(functions.createUser("Gene", "Simmons")).not.toEqual({
      firstName: "Gene",
      lastName: "Belcher"
    });
  });
});

describe("sumDigits", () => {
  test("function should return the sum of it's digits", () => {
    expect(functions.sumDigits(1234)).toBe(10);

    expect(functions.sumDigits(927)).toBe(18);

    expect(functions.sumDigits(84737)).toBe(29);
  });
});
