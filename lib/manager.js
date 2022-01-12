const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email
        this.officeNumber = officeNumber;
    }

    getRole() {
        console.log('Role: Manager');
    }
}


var test = new Manager("Test", 145, "test", 143);

test.getRole();