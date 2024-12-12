const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "db",
    port: process.env.DB_PORT || "3306",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "pass123",
    database: process.env.DB_NAME || "dbname",
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = connection;
