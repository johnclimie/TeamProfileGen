const Manager = require('../lib/manager');
let newMan = new Manager('Tyler', 1, 'tyler@mail.com', 44);

// Tests to make sure all methods for manager are working as they should
describe('name', () => {
    test('getName returns manager name', () => {
        let name = 'Tyler';
        let result = newMan.getName();
        expect(result).toBe(name);
    })
})

describe('id', () => {
    test('getId returns manager id', () => {
        let id = 1;
        let result = newMan.getId();
        expect(result).toBe(id);
    }) 
})

describe('email', () => {
    test('getEmail returns the manager email', () => {
        let email = 'tyler@mail.com';
        let result = newMan.getEmail();
        expect(result).toBe(email);
    })
}) 

describe('role', () => {
    test('getRole returns the manager role', () => {
        let role = 'Manager';
        let result = newMan.getRole();
        expect(result).toBe(role);
    })
}) 

describe('officeNumber', () => {
    test('getofficeNumber returns the manager office number', () => {
        let officeNo = 44;
        let result = newMan.getofficeNumber();
        expect(result).toBe(officeNo);
    })
}) 