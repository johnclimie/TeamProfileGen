const Engineer = require('../lib/engineer');
let newEng = new Engineer("Tyler", 1, "tyler@mail.com", "tylerGit");

// Tests to make sure all methods for engineer are working as they should
describe('name', () => {
    test('getName returns engineer name', () => {
        let name = "Tyler";
        let result = newEng.getName();
        expect(result).toBe(name);
    })
})

describe('id', () => {
    test('getId returns engineer id', () => {
        let id = 1;
        let result = newEng.getId();
        expect(result).toBe(id);
    })
})

describe('email', () => {
    test('getEmail returns engineer email', () => {
        let email = "tyler@mail.com";
        let result = newEng.getEmail();
        expect(result).toBe(email);
    })
})

describe('github', () => {
    test('getGithub returns engineer github', () => {
        let github = "tylerGit";
        let result = newEng.getGithub();
        expect(result).toBe(github);
    })
})

describe('role', () => {
    test('getRole returns engineer role', () => {
        let role = "Engineer";
        let result = newEng.getRole();
        expect(result).toBe(role);
    })
})