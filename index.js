// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Imported Classes
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// Imported HTML Templates
let startHTML = require('./HTML_Templates/startHTML');
let addMember = require('./HTML_Templates/addMember');
let finish = require('./HTML_Templates/finish');

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
        .then(function(response) {
            var newHTMl;
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);

            console.log(response.addOrQuit);
            
        })
}


start();