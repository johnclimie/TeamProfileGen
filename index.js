// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Imported Classes
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

var start = () => {
    inquirer
        .prompt([
            {
                name: 'managerName',
                message: `Welcome to the Team Profile Generator \n What is the Manager's name?`,
                type: 'input'
            },
            {
                name: 'managerId',
                message: `What is this manager's id?`,
                type: 'input'
            },
            {
                name: 'managerEmail',
                message: `What is this manager's email?`,
                type: 'input'
            },
            {
                name: 'managerOfficenumber',
                message: `What is this manager's office number?`,
                type: 'input'
            },
            {
                name: 'addOrQuit',
                message: `What would you like to do?`,
                type: 'list',
                choices: ['Add an engineer', 'Add an intern', 'Finish']
            }
        ])
}


start();