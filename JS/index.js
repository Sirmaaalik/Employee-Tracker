//  Here is where all the functions will be executed
const mysql = require('mysql2');

switch (functions) {
    case 'View all departments':
        return mysql.query(
            "SELECT * FROM departments"
        )
        break;
    case 'View all roles':
        return("SELECT title FROM roles, JOIN department_name FROM departments ");
        break;
    case 'View all employees':
        return("SELECT * FROM EMPLOYEES, ");
        break;
    case 'Add a department':
        return("INSERT INTO departments(department_name");
        break;
    case 'Add a role':
        return("INSERT INTO roles(title, salary, department_id");
        break;
    case 'Add an employee':
        return("INSERT INTO employee(first_name, last_name, role_id, manager_id");
        break;
    case 'Update an employee role':
        return("");
        break;
}