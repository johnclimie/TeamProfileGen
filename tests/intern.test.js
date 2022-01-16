const Intern = require('../lib/intern');
let newInt = new Intern('Tyler', 1, 'tyler@mail.com', 'GA Tech');

// Tests to make sure all methods for intern are working as they should
describe('name', () => {
    test('getName returns the intern name', () => {
        let name = 'Tyler';
        let result = newInt.getName();
        expect(result).toBe(name);
    })
}) 

describe('id', () => {
    test('getId returns the intern id', () => {
        let id = 1;
        let result = newInt.getId();
        expect(result).toBe(id);
    })
}) 

describe('email', () => {
    test('getEmail returns the intern email', () => {
        let email = 'tyler@mail.com';
        let result = newInt.getEmail();
        expect(result).toBe(email);
    })
}) 

describe('school', () => {
    test('getSchool returns the intern school', () => {
        let school = 'GA Tech';
        let result = newInt.getSchool();
        expect(result).toBe(school);
    })
}) 

describe('role', () => {
    test('getRole returns the intern name', () => {
        let intern = 'Intern';
        let result = newInt.getRole();
        expect(result).toBe(intern);
    })
}) 