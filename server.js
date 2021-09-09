// Just a place for all of my requires
const inquirer = require('inquirer');
const Database = require('./JS/index');
const db = new Database();
const connection = require('./JS/connection');
const { title } = require('process');
// const express = require('express');
var departmentArray = [];

// New instance of index class
  

// The decision the user has to choose from
function init() {inquirer.prompt([
    {
        type: 'list',
        name: 'pick',
        message: 'Choose one of the following options: ',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Delete a department', 'Add a role', 'Add an employee', 'Update an employee role']

    },
]).then((answers) => {
    db.getAllDepartments().then(([rows]) => {
        let department = rows;
        const departmentA = department.map(({id, title}) => 
            ({
                name: title, value: id
            })
        );
        departmentArray = departmentA;   
    })
    .then(() => {
            switch(answers.pick) {
                case 'View all departments':
                    return db.getAllDepartments().then(([rows]) => {
                        console.table(rows);
                    });
                // case 'View all roles':
                //     ("SELECT title FROM roles, JOIN department_name FROM departments ");
                //     break;
                // case 'View all employees':
                //     ("SELECT * FROM EMPLOYEES, ");
                //     break;
                case 'Delete a department':
                    return db.deleteDepartment(departmentArray).then((res) => {
                        console.log('Successfully deleted apartment.');
                        init();
                    });
                // case 'Add a role':
                //     ("INSERT INTO roles(title, salary, department_id)")
                //     ("VALUES (?, ?)");
                //     break;
                // case 'Add an employee':
                // manager and role
                //     ("INSERT INTO employee(first_name, last_name, role_id, manager_id)")
                //     ("VALUES (?, ?, ?, ?)");
                //     break;
                // case 'Update an employee role':
                //     ("");
                //     break;
            };
        });
})

};

// Function to connect to the index file
// connection(init => {
//     inquirer.prompt(choice)
//     .then((answers) => {
//         return functions (answers);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// })
    
init();