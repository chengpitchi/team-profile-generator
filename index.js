const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern'); 

const fs = require('fs'); 
const inquirer = require('inquirer'); 

const engineers = new Array(); 
const interns = new Array(); 

const managerInfo = [
    {
      type: 'input',
      message: 'What is the Manager\'s name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is the Manager\'s ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the Manager\'s email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the Manager\'s office number',
      name: 'officeNumber',
    },
    {
      type: 'list',
      message: 'What kihd of license should your project have?',
      name: 'license',
      choices: ['None', 'MIT', 'JavaScript', 'Apache 2.0', 'Boost Software 1.0', 'Perl', 'Open Database'],
    },
    ];

const typeQuestion = [    
    {
        type: 'list',
        message: 'What the of team member you want to add?',
        name: 'type',
        choices: ['Engineer', 'Intern', 'No more want to add'],
    }]
  
const engineerInfo = [
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s Github username',
        name: 'github',
    },
    ];

const InternInfo = [
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s School Name',
        name: 'school',
    },
    ];    
  
  inquirer
    .prompt(managerInfo)
    .then((response) => {
        managerObj = new Manager(response.name, response.id, response.email, response.officeNumber)
    })
    .then(() => {
        addTeamMember(); 
    });
/*  
  // TODO: Create a function to write README file
  function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data); 
  
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.error(err) : console.log('Congratulations! Your professional README file is generated.'))    
  }
*/
  // TODO: Create a function to initialize app
  function init() {}
  
  // Function call to initialize app
  init();
  