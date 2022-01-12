const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email
        this.school = school;
    }

    getRole() {
        console.log('Role: Intern');
    }

    getSchool() {
        console.log(`School: ${school}`)
    }
}


var test = new Intern("Test", 145, "test", "Locust Grove");

test.getRole();
test.getSchool()