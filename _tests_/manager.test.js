const Manager = require('../lib/Manager')

test("Can create an office number.", () => {
  const testOfficeNumber = 123;
  const employee = new Manager(
    "Mary",
    "maryjones@mysite.com",
    450,
    "Manager",
    testOfficeNumber
  );
  expect(employee.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
  const testOfficeNumber = 123;
  const employee = new Manager(
    "Mary",
    "maryjones@mysite.com",
    450,
    "Manager",
    testOfficeNumber
  );
  expect(employee.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
  const returnValue = "Manager";
  const employee = new Manager("Mary", "maryjones@mysite.com", 450, "Manager", 123);
  expect(employee.getRole()).toBe(returnValue);
});