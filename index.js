const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./lib/generateHTML');  

const fs = require('fs'); 
const inquirer = require('inquirer'); 
const { Console } = require('console');

const engineers = new Array(); 
const interns = new Array(); 
let objManager; 

// questions for manager 
const managerInfo = [
    {
      type: 'input',
      message: 'What is the Manager\'s name?',
      name: 'name',
      // validation for validation empty field
      validate(input) {
        if (input !== '') return true;  
        throw Error('The field cannot be empty.');
        },
    },
    {
      type: 'input',
      message: 'What is the Manager\'s ID?',
      name: 'id',
      validate(input) {
        if (input !== '') return true;  
        throw Error('The field cannot be empty.');
        },
    },
    {
      type: 'input',
      message: 'What is the Manager\'s email address?',
      name: 'email',
      // validation for email format
      validate(input) {
            if (input === '') {
                throw Error('The field cannot be empty.');
                return false; 
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true; 
            }

            throw Error('Please input correct email format.');
        },
    },
    {
      type: 'input',
      message: 'What is the Manager\'s office number',
      name: 'officeNumber',
      validate(input) {
        if (input !== '') return true;  
        throw Error('The field cannot be empty.');
        },
    }
    ];

// question for showning team memeber menu
const typeQuestion = [    
    {
        type: 'list',
        message: 'What the of team member you want to add?',
        name: 'type',
        choices: ['Engineer', 'Intern', 'No more want to add'],
    }]

// questions for engineer
const engineerInfo = [
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s ID?',
        name: 'id',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email address?',
        name: 'email',
        validate(input) {
            if (input === '') {
                throw Error('The field cannot be empty.');
                return false; 
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true; 
            }

            throw Error('Please input correct email format.');
        },
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s Github username',
        name: 'github',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    ];

// questions for intern
const InternInfo = [
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    {
        type: 'input',
        message: 'What is the Intern\'s ID?',
        name: 'id',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email address?',
        name: 'email',
        validate(input) {
            if (input === '') {
                throw Error('The field cannot be empty.');
                return false; 
            }

            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
                return true; 
            }

            throw Error('Please input correct email format.');
        },
    },
    {
        type: 'input',
        message: 'What is the Intern\'s School Name',
        name: 'school',
        validate(input) {
            if (input !== '') return true;  
            throw Error('The field cannot be empty.');
            },
    },
    ];    

// recursive function for adding team members
function addTeamMember() {
    inquirer.prompt(typeQuestion)
        .then((response) => {
                switch (response.type) {
                    case 'Engineer':
                        inquirer.prompt(engineerInfo)
                            .then((response) => {
                                console.log('adding engineer ...'); 
                                engineers.push(new Engineer(response.name, response.id, response.email, response.github))
                                addTeamMember(); 
                            }); 
                        break; 
                    case 'Intern':
                        inquirer.prompt(InternInfo)
                            .then((response) => {
                                console.log('adding intern ...');
                                interns.push(new Intern(response.name, response.id, response.email, response.school))
                                addTeamMember(); 
                            }); 
                        break; 
                    default: 
                        // if no more to add, pass all the objects to the write file function
                        writeToFile(objManager, engineers, interns); 
                }
            }
        )
}

function writeToFile(objManager, engineers, interns) {
    const htmlContent = generateHTML(objManager, engineers, interns); 

    fs.writeFile('./dist/index.html', htmlContent, (err) =>
    err ? console.error(err) : console.log('Congratulations! Your team profile page is created.'))    
}

// function to initialize app
function init() {
    console.log('Welcome to Team Profile Generator!'); 
    console.log('Please answer the following questions to generate your team profile:'); 

    // function for starting with manager questions
    inquirer
    .prompt(managerInfo)
    .then((response) => {
        objManager = new Manager(response.name, response.id, response.email, response.officeNumber)
    })
    // after answering manager questions, call the recursive function to add team members
    .then(() => {
        addTeamMember(); 
    });
}

// Function call to initialize app
init();
  