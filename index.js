const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type:'input',
        name:'email',
        message:'Enter your email address',
    },
    {
        type:'input',
        name:'github',
        message:'Enter your Github username',
    },
    {
        type:'input',
        name:'title',
        message:'Whats the name of your project',
    },
    {
        type:'input',
        name:'description',
        message:'Enter a short description of your project',
    },
    {
        type:'list',
        name:'license',
        message:'which liscense would you like?',
        choice: ["Apache 2.0", "MIT", "GNU 3.0", "None"]
    },
    {
        type:'input',
        name:'installation',
        message:'which command should you use to run dependencies',
        default:'npm i'
    },
    {
        type:'input',
        name:'testing',
        message:'which command should you run to test',
        default:'npm test'
    },
    {
        type:'input',
        name:'usage',
        message:'what does the user need to know using the repo?'
    },
    {
        type:'input',
        name:'contribution',
        message:'what does the user need to know about contributing to repo?'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`Genrating README...`);
        writeToFile('README.md', generateMarkdown({...response}))
    })
}

// function call to initialize program
init();
