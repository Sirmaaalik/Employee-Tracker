// Here is where all the questions will be posted for the terminal

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const functions = require('.server');


// TODO: Question for the table
const choice = [
    {
        type: 'list',
        name: 'Pick',
        message: 'Choose one of the following options: ',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

    },
];

init => {
    inquirer.prompt(choice)
    .then((answers) => {
        return functions (answers);
    })
    .catch((error) => {
        console.log(error);
    })
}
    