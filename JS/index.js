//  Here is where all the functions will be executed
const mysql = require('mysql2');
const connect = require('./connection');

// Create class for database
// Connection.promise().query
const inquirer = require('inquirer');
const connection = require('./connection');

class Database {
    getAllDepartments (){
        return connection.promise().query (
            'SELECT * FROM departments;'
        );
    };
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