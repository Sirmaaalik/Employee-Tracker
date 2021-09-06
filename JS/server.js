// Just a place for all of my requires & express
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_db'
  },
  console.log(`Connected to the inventory_db database.`)
);

//  Here is where all the functions will be executed
// Database
db.query(`DELETE FROM books WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });

  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  