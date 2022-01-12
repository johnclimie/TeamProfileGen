class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`Name: ${name}`);
    }

    getId() {
        console.log(`Id: ${id}`);
    }

    getEmail() {
        console.log(`Email: ${email}`);
    }

    getRole() {
        console.log('Role: Employee');
    }
}

module.exports = Employee;