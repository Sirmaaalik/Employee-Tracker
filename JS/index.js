//  Here is where all the functions will be executed
const mysql = require('mysql2');
const connect = require('./connection');

// Create class for database
// Connection.promise().query
const inquirer = require('inquirer');
const connection = require('./connection');

class Database {
    // Viewing section
    getAllDepartments (){
        return connection.promise().query (
            'SELECT * FROM departments;'
        );
    }
    getAllRoles (){
        return connection.promise().query (
            'SELECT * FROM roles;'
        );
    }
    getAllEmployees (){
        return connection.promise().query (
            'SELECT * FROM employees;'
        );
    }

    // Adding section
    async addDepartment (departmentArray){
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'empty',
                message: 'Name of department: ',
            }
        ]);
        let addDep = await connection.promise().query (
            'INSERT INTO departments(department_name) VALUES (?)', [answers.empty]
            );
            return addDep;
    }
    async addRole (departmentArray){
        return inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Title for role: '
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Salary amount: '
            },
            {
                type: 'list',
                name: 'ID',
                message: 'Department ID:',
                choices: departmentArray
            }
        ]).then(async (answers) => {
            let addRo = await connection.promise().query (
                'INSERT INTO roles(title, salary, department_id) VALUES (?, ?, ?)', [answers.title, answers.salary, answers.ID]
                );
                return addRo;
        })
    }
    async addEmployees (departmentArray){
        let answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'empty',
                message: 'Name of department: ',
            }
        ]);
        let addDep = await connection.promise().query (
            'INSERT INTO departments(department_name) VALUES (?)', [answers.empty]
            );
            return addDep;
    }

    //SET TITLE = 'JUNE' WHERE id = 3
    //

    // Delete needs fixing
    async deleteDepartment (departmentArray){
        let answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'empty',
                message: 'Choose a depertment to delete: ',
                choices: departmentArray
            }
        ]);
        let deleteDetP = await connection.promise().query (
            'DELETE FROM departments WHERE `id` = ?', [answers.empty]
            );
            return deleteDetP;
    }
};

module.exports = Database;