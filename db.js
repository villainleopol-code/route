const mysql = require("mysql")

const connection = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "password123",
 database: "shop"
})

connection.connect()

module.exports = connection
