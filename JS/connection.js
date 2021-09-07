const mysql = require('mysql2');

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tracker_db'
  },
    console.log("Tracker sql database found!")
  );

  module.exports = connection;
