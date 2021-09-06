// Just a place for all of my requires
const inquirer = require('inquirer');
const functions = require('./index');
const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracker_db'
  },
    console.log("Tracker sql database found!")
  );

// // Database
// db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });

//   // Default response for any other request (Not Found)
// app.use((req, res) => {
//     res.status(404).end();
//   });
  

// The decision the user has to choose from
const choice = [
    {
        type: 'list',
        name: 'Pick',
        message: 'Choose one of the following options: ',
        choices: ['View all Departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']

    },
];

// Function to connect to the index file
init => {
    inquirer.prompt(choice)
    .then((answers) => {
        return functions (answers);
    })
    .catch((error) => {
        console.log(error);
    })
}
    