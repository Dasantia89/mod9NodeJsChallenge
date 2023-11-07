// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'subTitle',
        message: 'Enter a sub title for the project'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Provide a short description explaining the what, why and how of your project.'
    },
    {
        type: 'editor',
        name: 'install',
        message: 'What are the steps required to install your project?\n Provide a step-by-step description of how to get the development environment running.\n'
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.\nTo add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:\n\t```md\n\t![alt text](assets/images/screenshot.png)\n\t```\n'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for someone who wants to collaborate on this project?'
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'editor',
        name: 'collab',
        message: 'List your collaborators and any links to tutorials you used.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like your project to use?',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter a link to your github profile.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter an email address where people can send additional questions.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        var text = generateMarkdown(answers);
        return writeToFile('NewReadme.md', text);
    })
    .catch(err => console.error(err))

}

// Function call to initialize app
init();
