const mysql = require('mysql')
let connection;

  connection = mysql.createConnection({
    host: process.env.host_data,
    dialect: process.env.dialect,
    port: 3306,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
  })

connection.connect() 

module.exports = connection

