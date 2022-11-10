const Engineer = require('../lib/Engineer')

test("Can create a github.", () => {
  const testGithub = "maryjones123";
  const employee = new Engineer(
    "Mary",
    "maryjones@mysite.com",
    33,
    "Engineer",
    testGithub
  );
  expect(employee.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
  const testGithub = "maryjones123";
  const employee = new Engineer(
    "Mary",
    "maryjones@mysite.com",
    33,
    "Engineer",
    testGithub
  );
  expect(employee.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
  const returnValue = "Engineer";
  const employee = new Engineer(
    "Mary",
    "maryjones@mysite.com",
    33,
    "Engineer",
    "maryjones123"
  );
  expect(employee.getRole()).toBe(returnValue);
});