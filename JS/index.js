//  Here is where all the functions will be executed
const mysql = require('mysql2');
const connection = require('./connection');
const connect = require('./connection');

// Create class for database


switch (functions) {
    case 'View all departments':
        connect.query
        ("SELECT * FROM departments")
        break;
    case 'View all roles':
        ("SELECT title FROM roles, JOIN department_name FROM departments ");
        break;
    case 'View all employees':
        ("SELECT * FROM EMPLOYEES, ");
        break;
    case 'Add a department':
        ("INSERT INTO departments(department_name");
        break;
    case 'Add a role':
        ("INSERT INTO roles(title, salary, department_id)")
        ("VALUES (?, ?)");
        break;
    case 'Add an employee':
        ("INSERT INTO employee(first_name, last_name, role_id, manager_id)")
        ("VALUES (?, ?, ?, ?)");
        break;
    case 'Update an employee role':
        ("");
        break;
}

module.exports = connection;