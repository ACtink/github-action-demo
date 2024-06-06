const add = require("./index.js")


test("add function test", () => {
  expect(add(20, 40)).toBe(60);
});
