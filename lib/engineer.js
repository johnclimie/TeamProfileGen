const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email
        this.github = github;
    }

    getRole() {
        console.log('Role: Engineer');
    }
}


var test = new Engineer("Test", 145, "test", 143);

test.getRole();