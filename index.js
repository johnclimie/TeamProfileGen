// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Imported Classes
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

var start = () => {
    inquirer
        .prompt([
            {
                name: 'managerName',
                message: `Welcome to the Team Profile Generator \n What is the manager's name?`,
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
                                <p class='card-text'>ID: ${JSON.parse(JSON.stringify(newManager.getId()))}</p>
                                <p class='card-text'>Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></p>
                                <p class='card-text'>Office Number: ${JSON.parse(JSON.stringify(newManager.getofficeNumber()))}</p>
                            </div>
                        </div>
            `;


            function addMember() {
                inquirer
                    .prompt(
                        {
                            name: 'addOrQuit',
                            message: 'What would you like to do?',
                            type: 'list',
                            choices: ['Add an engineer', 'Add an intern', 'Finish']
                        }
                    )

                    .then(function(response) {
                        if (response.addOrQuit === "Add an engineer" || response.addOrQuit === "Add an intern") {
                            if (response.addOrQuit === "Add an engineer") {
                                inquirer
                                    .prompt([
                                        {
                                            name: 'name',
                                            message: `What's this engineer's name?`,
                                            type: 'input'
                                        },
                                        {
                                            name: 'id',
                                            message: `What is this engineer's id?`,
                                            type: 'input'
                                        },
                                        {
                                            name: 'email',
                                            message: `What is this engineer's email?`,
                                            type: 'input'
                                        },
                                        {
                                            name: 'github',
                                            message: `What is this engineer's Github?`,
                                            type: 'input'
                                        },
                                    ])

                                    .then(function(response) {
                                        let newEng = new Engineer(response.name, response.id, response.email, response.github);
                                        newHTML+= 
                                        `
                                                    <div class='card p-2 col-3 m-2 bg-light'>
                                                        <div class='p-3 border-bottom border-dark'>
                                                            <h1 class='card-title'>${newEng.getName()}</h1>
                                                            <h2 class='card-subtitle'>${newEng.getRole()}</h2>
                                                        </div>
                                                        <div class='card-text p-3'>
                                                            <p class='card-text'>ID: ${JSON.parse(JSON.stringify(newEng.getId()))}</p>
                                                            <p class='card-text'>Email:<a href="mailto:${newEng.getEmail()}">${newEng.getEmail()}</a></p>
                                                            <p class='card-text'>Github: <a href="https://www.github.com/${newEng.getGithub()}" target="_blank">${newEng.getGithub()}</a></p>
                                                        </div>
                                                    </div>
                                        `
                                        addMember();
                                    })
                            } else if ( response.addOrQuit === "Add an intern") {
                                inquirer
                                    .prompt([
                                        {
                                            name: 'name',
                                            message: `What is this intern's name?`,
                                            type: 'input'
                                        },
                                        {
                                            name: 'id',
                                            message: `What is this intern's id?`,
                                            type: 'input'
                                        }, 
                                        {
                                            name: 'email',
                                            message: `What is this intern's email?`,
                                            type: 'input'
                                        },
                                        {
                                            name: 'school',
                                            message: `What is this intern's school?`,
                                            type: 'input'
                                        }
                                    ])

                                    .then(function(response) {
                                        let newInt = new Intern(response.name, response.id, response.email, response.school);
                                        newHTML+=
                                        `
                                                    <div class='card p-2 col-3 m-2 bg-light'>
                                                        <div class='p-3 border-bottom border-dark'>
                                                            <h1 class='card-title'>${newInt.getName()}</h1>
                                                            <h2 class='card-subtitle'>${newInt.getRole()}</h2>
                                                        </div>
                                                        <div class='card-text p-3'>
                                                            <p class='card-text'>ID: ${JSON.parse(JSON.stringify(newInt.getId()))}</p>
                                                            <p class='card-text'>Email :<a href="mailto:${newInt.getEmail()}">${newInt.getEmail()}</a></p>
                                                            <p class='card-text'>School: ${newInt.getSchool()}</p>
                                                        </div>
                                                    </div>
                                        `
                                        addMember();
                                    })
                            }
                        } else {
                            newHTML += 
                            `
                                    </div>
                                </div>
                            </body>
                            </html>
                            `

                            fs.writeFile('index.html', newHTML, err => {
                                if (err) {
                                    console.error(err)
                                    return;
                                }
                            })
                        }
                    })
            }


            addMember();

        })
}


start();