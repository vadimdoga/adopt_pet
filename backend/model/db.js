"user strict"

const mysql = require("mysql")

//local mysql db connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Baikal192",
  database: "adopt_pet_db",
})

connection.connect((err) => {
  if(!err) return console.log("Connection with db succesfull")
})

module.exports = connection
