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
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

    },
])
    .then((answers) => {
        var departmentArray = [];
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
            let department = rows;
            const departmentB = department.map(({id, title, salary, department_id}) => 
            ({
                value: id, name: title, salary: salary, departId: department_id
            })
            );
            departmentArray = departmentB;
        })
        db.getAllEmployees().then(([rows]) => {
            let department = rows;
            const departmentC = department.map(({id, first_name, last_name, role_id, manager_id}) => 
                ({
                    value: id, first: first_name, last: last_name, roleId: role_id, manager: manager_id
                })
            );
            departmentArray = departmentC;
        })
        .then(() => {
            switch(answers.pick) {
                // Viewing section
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
                // Adding section
                case 'Add a department':
                    return db.addDepartment(departmentArray).then((res) => {
                        console.log('Successfully added the department.');
                        init();
                    })
                case 'Add a role':
                    return db.addRole(departmentArray).then(([rows])=> {
                        console.table(rows);
                        init();
                    })
                case 'Add an employee':
                    return db.addEmpoyee().then(([rows])=> {
                        console.table(rows);
                        init();
                    })
                case 'Update an empoyee role':
                    return db.updateRole().then(([rows]) => {
                        init();
                    })
                // Delete section
                // case 'Delete a department':
                //     return db.deleteDepartment(departmentArray).then((res) => {
                //         console.log('Successfully deleted the department.');
                //         init();
                //     });
                // case 'Delete a role':
                //     return db.deleteRole(departmentArray).then((res) => {
                //         console.log('Successfully deleted the role.');
                //         init();
                //     });
                // case 'Delete an employee':
                //     return db.deleteEmployee(departmentArray).then((res) => {
                //         console.log('Successfully deleted an employee.');
                //         init();
                //     });
                    
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