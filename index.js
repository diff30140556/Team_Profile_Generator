// import the needed packages and modules
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs')

// create an empty array to store the team member object 
const teamMember = [];

// Name validation
function validateName(name) {
    // input only can be letters
    const isValid = /^[a-zA-Z]+$/.test(name);
    // input can not be blank
    if (name.trim() === '') {
        return 'The name can not be blank';
    } else if (!isValid) {
        return 'Please enter letters only';
    }
    // Return true if input is valid
    return true;
}

// ID validation
function validateID(id) {
    // input only can be letters or number
    const isValid = /^[a-zA-Z0-9]+$/.test(id);
    // input can not be blank
    if (id.trim() === '') {
        return 'Please enter a non-empty ID';
    } else if (!isValid) {
        return 'Please enter a valid ID';
    }
    // Return true if input is valid
    return true;
}

// Email validation
function validateEmail(email) {
    // the format has includes "@", ".", and a domain name
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (isValidEmail) {
        return true;
    } else {
        return 'Please enter a valid email address';
    }
}

// GitHub validation
function validateGitHub(GitHub) {
    // the format has includes "@", ".", and a domain name
    const isValidGitHub = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(GitHub);
    if (isValidGitHub) {
        return true;
    } else {
        return 'Please enter a valid GitHub user name';
    }
}

// Starting to build th team
const buildTeam = () => {
    console.log(`Welcome to the team system, let's start building your team.`)
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the manager's name?`,
                validate: name => validateName(name),
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the manager's ID?`,
                validate: id => validateID(id),
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the manager's email?`,
                validate: email => validateEmail(email),
            },
            {
                type: 'input',
                name: 'office',
                message: `What is the manager's office number?`,
                validate: id => validateID(id),
            },
        ])
}

// if the user wants to add more members to the tram, choose which role the user wants to add
function pickRole() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: 'What role you want to add to your team?',
                choices: ['Engineer', 'Intern'],
            },
        ])
        .then(answer => {
            if (answer.role === 'Engineer') {
                addEngineer()
            } else if (answer.role === 'Intern') {
                addIntern()
            }
        })
        .catch(err => console.log(err))
}

// ask if the user wants to add more members to the team 
function askToAddMore() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'isMore',
                message: 'Do you want to add more role to your team?',
            }
        ])
        .then(answer => {
            if (answer.isMore) {
                pickRole()

            } else {
                generateHTML();
            }
        })
        .catch(err => console.log(err))
}

// adding an engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineer's name?`,
                validate: name => validateName(name),
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the engineer's ID?`,
                validate: id => validateID(id),
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the engineer's email?`,
                validate: email => validateEmail(email),
            },
            {
                type: 'input',
                name: 'GitHub',
                message: `What is the engineer's GitHub account?`,
                validate: GitHub => validateGitHub(GitHub),
            },
        ])
        .then(ans => {
            const engineer = new Engineer(ans)
            teamMember.push(engineer)
            printCurrentTeam();
            askToAddMore();
        })
        .catch(err => console.log(err))
}

// adding an intern
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the intern's name?`,
                validate: name => validateName(name),
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the intern's ID?`,
                validate: id => validateID(id),
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the intern's email?`,
                validate: email => validateEmail(email),
            },
            {
                type: 'input',
                name: 'school',
                message: `What is the intern's school?`,
                validate: name => validateName(name),
            },
        ])
        .then(ans => {
            const intern = new Intern(ans)
            teamMember.push(intern)
            printCurrentTeam();
            askToAddMore();
        })
        .catch(err => console.log(err))
}

// showing the current team members each time after the adding a role to the team
const printCurrentTeam = () => {
    console.log('Current Team: \n')
    console.table(teamMember)
}

// function to return the icon base on the role
function generateIcon(ele) {
    switch (ele.role) {
        case 'Manager':
            return `<i class="fa-solid fa-mug-hot"></i>`
        case 'Engineer':
            return `<i class="fa-solid fa-glasses"></i>`
        case 'Intern':
            return `<i class="fa-sharp fa-solid fa-graduation-cap"></i>`
    }
}

// function to return the last information base on the role
function generateVariableInfo(ele) {
    switch (ele.role) {
        case 'Manager':
            return `<li class="list-group-item">Office Number: ${ele.office}</li>`
        case 'Engineer':
            return `<li class="list-group-item">GitHub: <a href="https://github.com/${ele.GitHub}" target="_blank">GitHub</a></li>`
        case 'Intern':
            return `<li class="list-group-item">School: ${ele.school}</li>`
    }
}

// generating the HTML structure
function generateHTML() {
    let memberListHTML = ``;
    teamMember.forEach(Element => {
        memberListHTML += `
        <li class="col-md-6 col-lg-4 mb-4">
                    <div class="card memberCard">
                        <div class="card-header bg-primary text-light">
                            <h2 class="fs-4">${Element.name}</h2>
                            <h3 class="title fs-5"><span class="me-2">${generateIcon(Element)}</span>${Element.role}</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${Element.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${Element.email}">${Element.email}</a></li>
                                ${generateVariableInfo(Element)}
                            </ul>
                        </div>
                    </div>
                </li>`
    })

    let HTMLstructure = `
            <!DOCTYPE html>
            <html lang="en">
            
            <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Member</title>
            <!-- CSS Reset -->
            <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
            <!-- Bootstrap 5 -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <!-- Custom CSS -->
            <link rel="stylesheet" href="style.css">
            
            </head>
            
            <body>
            
            <div class="wrap">
                <header class="py-3">
                    <h1 class="text-light fw-bold text-center">My Team</h1>
                </header>
                <div class="container py-5">
                    <ul class="memberList row justify-content-center mx-auto ps-0">
                    ${memberListHTML}
                    </ul>
                </div>
            </div>
            
            <!-- Bootstrap 5 JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"></script>
            </body>
            
    </html>`
    writeHTML(HTMLstructure);
}

// creating a new HTML file
function writeHTML(HTMLstructure) {
    fs.writeFile('./dist/index.html', HTMLstructure, err => {
        if (err) throw new Error(`Oops, there's something wrong! Please double check the code.`)
        console.log(`index.html file has been created under dist folder!`)
    });
}

// initial function to start building the team
const init = () => {
    buildTeam()
        .then(ans => {
            const manager = new Manager(ans);
            teamMember.push(manager);
            printCurrentTeam()
            askToAddMore()
        })
        .catch(err => console.log(err))
}

init();