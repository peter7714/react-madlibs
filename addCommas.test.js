const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test('addsCommas', () => {
    expect(addCommas(1234)).toEqual('1,234');
  });
  test('addsCommas', () => {
    expect(addCommas(1000000)).toEqual('1,000,000');
  });
  test('addsCommas', () => {
    expect(addCommas(9876543210)).toEqual('9,876,543,210');
  });
  test('addsCommas', () => {
    expect(addCommas(6)).toEqual('6');
  });
  test('addsCommas', () => {
    expect(addCommas(-10)).toEqual('-10');
  });
  test('addsCommas', () => {
    expect(addCommas(-5678)).toEqual('-5,678');
  });
});
