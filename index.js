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
const internal = require('stream');

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
                name: 'managerOfficeNumber',
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
            var newHTML;
            let newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            newHTML +=
             `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <title>Your Team</title>
            </head>
            <body class='bg-dark'>
                <div class="jumbotron bg-success">
                    <h1 class='text-light text-center'>Your Team</h1>
                </div>
            
                <div class='container'>
                    <div class='row'>
                        <div class='card p-2 col-3 m-2 bg-light'>
                            <div class='p-3 border-bottom border-dark'>
                            <h1 class='card-title'>${newManager.getName()}</h1>
                            <h2 class='card-subtitle'>${newManager.getRole()}</h2>
                            </div>
                            <div class='card-text p-3'>
                                <p class='card-text'>ID: ${JSON.stringify(newManager.getId())}</p>
                                <p class='card-text'>Email:<a href="#">${newManager.getEmail()}</a></p>
                                <p class='card-text'>Office Number: ${JSON.stringify(newManager.getofficeNumber())}</p>
                            </div>
                        </div>
            `;
            
            
            if (response.addOrQuit === "Add an engineer") {
                inquirer
                    .prompt([
                        {
                            name: 'eName',
                            message: `What is this engineer's name?`,
                            type: 'input'
                        },
                        {
                            name: 'eId',
                            message: `What is this engineer's id?`,
                            type: 'input'
                        },
                        {
                            name: 'eEmail',
                            message: `What is this employee's email?`,
                            type: 'input'
                        },
                        {
                            name: 'eGithub',
                            message: `What is this employee's Github name?`,
                            type: 'input'
                        },
                        {
                            name: 'eAddOrQuit',
                            message: `What would you like to do?`,
                            type: 'list',
                            choices: ['Add an engineer', 'Add an intern', 'Finish']
                        }
                    ])
                    .then(function(response) {
                        let newEng = new Engineer(response.eName, response.eId, response.eEmail, response.eGithub);

                        newHTML +=
                        `
                                    <div class='card p-2 col-3 m-2 bg-light'>
                                        <div class='p-3 border-bottom border-dark'>
                                            <h1 class='card-title'>${newEng.getName()}</h1>
                                            <h2 class='card-subtitle'>${newEng.getRole()}</h2>
                                        </div>
                                        <div class='card-text p-3'>
                                            <p class='card-text'>ID: ${JSON.stringify(newEng.getId())}</p>
                                            <p class='card-text'>Email:<a href="#">${newEng.getEmail()}</a></p>
                                            <p class='card-text'>${newEng.getGithub()}</p>
                                        </div>
                                    </div>
                        `
                    })
            } else if(response.addOrQuit === "Add an intern") {
                inquirer
                    .prompt([
                        {
                            name: "iName",
                            message: `What is this intern's name?`,
                            type: 'input'
                        },
                        {
                            name: "iId",
                            message: `What is this intern's Id?`,
                            type: 'input'
                        },
                        {
                            name: "iEmail",
                            message: `What is this intern's email?`,
                            type: 'input'
                        },
                        {
                            name: "iSchool",
                            message: `What is this intern's school?`,
                            type: 'input'
                        },
                        {
                            name: "iAddOrQuit",
                            message: `What would you like to do?`,
                            type: 'list',
                            choices: ['Add an engineer', 'Add an intern', 'Finish'] 
                        }
                    ])
                    .then(function(response) {
                        let newInt = new Intern(response.iName, response.iId, response.iEmail, response.iSchool)

                        newHTML +=
                        `
                                    <div class='card p-2 col-3 m-2 bg-light'>
                                        <div class='p-3 border-bottom border-dark'>
                                            <h1 class='card-title'>${newInt.getName()}</h1>
                                            <h2 class='card-subtitle'>${newInt.getRole()}</h2>
                                        </div>
                                        <div class='card-text p-3'>
                                            <p class='card-text'>ID: ${JSON.stringify(newInt.getId())}</p>
                                            <p class='card-text'>Email:<a href="#">${newInt.getEmail()}</a></p>
                                            <p class='card-text'>${newInt.getSchool()}</p>
                                        </div>
                                    </div>
                        `
                    })

            } else if (response.addOrQuit === "Finish"){
                
            }
        })
}


start();