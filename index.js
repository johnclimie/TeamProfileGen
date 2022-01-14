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
            
            if (response.addOrQuit === "Add an engineer" || response.addOrQuit === "Add an intern") {
                function addEngineerOrIntern(input) {
                    if (input.addOrQuit === "Add an engineer") {
                        inquirer
                            .prompt([
                                {
                                    name: "engineerName",
                                    message: `What is this engineer's name?`,
                                    type: 'input'
                                },
                                {
                                    name: "engineerId",
                                    message: `What is this engineer's Id?`,
                                    type: "input"
                                },
                                {
                                    name: "engineerEmail",
                                    message: `What is this engineer's email?`,
                                    type: 'input'
                                },
                                {
                                    name: "engineerGithub",
                                    message: `What is this engineer's Github?`,
                                    type: 'input'
                                },
                                {
                                    name: 'addOrQuit',
                                    message: `What would you like to do?`,
                                    type: 'list',
                                    choices: ['Add an engineer', 'Add an intern', 'Finish']
                                }
                            ])
                            .then(function(eResponse) {
                                let newEngineer = new Engineer(eResponse.engineerName, eResponse.engineerId, eResponse.engineerEmail, eResponse.engineerGithub);

                                newHTML +=
                                `
                                            <div class='card p-2 col-3 m-2 bg-light'>
                                                <div class='p-3 border-bottom border-dark'>
                                                    <h1 class='card-title'>${newEngineer.getName()}</h1>
                                                    <h2 class='card-subtitle'>${newEngineer.getRole()}</h2>
                                                </div>
                                                <div class='card-text p-3'>
                                                    <p class='card-text'>ID: ${JSON.stringify(newEngineer.getId())}</p>
                                                    <p class='card-text'>Email:<a href="#">${newEngineer.getEmail()}</a></p>
                                                    <p class='card-text'>${(newEngineer.getGithub())}</p>
                                                </div>
                                            </div>
                                `
                            })
                    } else if (input.addOrQuit === "Add an intern") {
                        console.log("intern");
                    } else {
                        newHTML += 
                        `
                                </div>
                            </div>
                        </body>
                        </html>
                        ` 
                    }
                }

                addEngineerOrIntern(response);
            } 
        })
}


start();