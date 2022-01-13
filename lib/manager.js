const Employee = require('./employee');

class Manager extends Employee {
    cosntructor(name, id, email, officeNumber) {
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