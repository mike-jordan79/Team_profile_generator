const Intern = require('../lib/Intern')

test("Can create school.", () => {
  const testSchool = "Some School Name";
  const employee = new Intern(
    "Mary",
    "maryjones@mysite.com",
    432,
    "Intern",
    testSchool
  );
  expect(employee.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
  const testSchool = "Some School Name";
  const employee = new Intern(
    "Mary",
    "maryjones@mysite.com",
    432,
    "Intern",
    testSchool
  );
  expect(employee.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
  const returnValue = "Intern";
  const employee = new Intern(
    "Mary",
    "maryjones@mysite.com",
    432,
    "Intern",
    "Some School Name"
  );
  expect(employee.getRole()).toBe(returnValue);
});