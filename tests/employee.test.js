const Employee = require('../lib/employee');
let newEmp = new Employee("Tyler", 4, "tyler@mail.com");

// Tests to make sure all methods for employee are working as they should
describe('name', () => {
    test('getName returns the employee name', () => {
        let name = "Tyler";
        let result = newEmp.getName();
        expect(result).toBe(name);
      });
})


describe('id', () => {
    test('getId returns the employee id', () => {
        let id = 4;
        let result = newEmp.getId();
        expect(result).toBe(id);
      });
})


describe('email', () => {
    test('getEmail returns the employee email', () => {
        let email = "tyler@mail.com";
        let result = newEmp.getEmail();
        expect(result).toBe(email);
      });
})

describe('role', () => {
    test('getRole returns the employee role', () => {
        let role = "Employee";
        let result = newEmp.getRole();
        expect(result).toBe(role);
      });
})