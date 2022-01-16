const Employee = require('./employee');

//Engineer is inherited from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        super.getName()
        super.getId();
        super.getEmail();
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;