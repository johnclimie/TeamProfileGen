const Employee = require('./employee');

//Intern is inherited from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;