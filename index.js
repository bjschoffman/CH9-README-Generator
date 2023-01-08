// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project.',
        choices:['MIT', 'Apache', 'none'],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Explain how others may contribute to your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests have been constructed and how to use them.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github useranme?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((answer) => {
        writeToFile('./sampleReadMe/README.md', generateMarkdown(answer))
        console.log('A new README file has been generated.')})
        .catch((error) => {console.log(error)})
};

// Function call to initialize app
init();
