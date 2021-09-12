// Just a place for all of my requires
const inquirer = require('inquirer');
const Database = require('./JS/index');
const db = new Database();
const connection = require('./JS/connection');
const { title } = require('process');
// const express = require('express');

// New instance of index class
  

// The decision the user has to choose from
function init()  {inquirer.prompt([
    {
        type: 'list',
        name: 'pick',
        message: 'Choose one of the following options: ',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Delete a department', 'Add a role', 'Add an employee', 'Update an employee role']

    },
])
    .then((answers) => {
        const departmentArray = [];
        db.getAllDepartments().then(([rows]) => {
            let department = rows;
            const departmentA = department.map(({id, department_name}) => 
            ({
                value: id, name: department_name 
            })
            );
            departmentArray = departmentA;
        })
        db.getAllRoles().then(([rows]) => {
            let roles = rows;
            let rolesA = roles.map(({id, title, salary, department_id}) => 
            ({
                value: id, name: title, salary: salary, departId: department_id
            })
            );
            array = rolesA
            console.log(departmentB);
        })
        db.getAllEmployees().then(([rows]) => {
            let department = rows;
            const departmentC = department.map(({id, first_name, last_name, role_id, manager_id}) => 
                ({
                    value: id, first: first_name, last: last_name, roleId: role_id, manager: manager_id
                })
            );
            departmentArray = departmentC; 
            console.log(departmentC);  
        })
        .then(() => {
            switch(answers.pick) {
                case 'View all departments':
                    return db.getAllDepartments().then(([rows]) => {
                        console.table(rows);
                        init();
                    });
                case 'View all roles':
                    return db.getAllRoles().then(([rows]) => {
                        console.table(rows);
                        init();
                    })
                case 'View all employees':
                    return db.getAllEmployees().then(([rows])=> {
                        console.table(rows);
                        init();
                    })
                case 'Delete a department':
                    return db.deleteDepartment(departmentArray).then((res) => {
                        console.log('Successfully deleted apartment.');
                        init();
                    });
                // case 'Add aa department':
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
            }
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