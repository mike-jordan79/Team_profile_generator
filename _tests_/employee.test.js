const Employee = require('../lib/Employee')

test("Can create an new employee.", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Testing name.", () => {
  const name = "James";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Testing ID.", () => {
  const id = 2;
  const employee = new Employee("Mary", "maryjones@mysite.com", id);
  expect(employee.id).toBe(id);
});

test("Testing email.", () => {
  const email = "maryjones@mysite.com";
  const employee = new Employee("Mary", email, 123);
  expect(employee.email).toBe(email);
});

test("Gets name through getName method.", () => {
  const testName = "Mary";
  const employee = new Employee(testName);
  expect(employee.getName()).toBe(testName);
});

test("Can test ID through getID method.", () => {
  const testID = 123;
  const employee = new Employee("Mary", "maryjones@mysite.com", testID, "Employee");
  expect(employee.getID()).toBe(testID);
});

test("Can test email through getEmail method.", () => {
  const testEmail = "maryjones@mysite.com";
  const employee = new Employee("Mary",testEmail, 123);
  expect(employee.getEmail()).toBe(testEmail);
});

test("Testing role.", () => {
  const returnValue = "Employee";
  const employee = new Employee("Mary","maryjones@mysite.com", 123, "Employee");
  expect(employee.getRole()).toBe(returnValue);
});