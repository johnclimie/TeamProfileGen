const Employee = require('./employee');

//Manager is inherited from Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        super.getName();
        super.getId();
        super.getEmail();
        this.officeNumber = officeNumber;
    }

    getofficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;