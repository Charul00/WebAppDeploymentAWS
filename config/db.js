const mysql = require("mysql");

const db = mysql.createConnection({
  host: "webappdb.cbu0ow62gx4g.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "12345678", // Use your MySQL password
  database: "webappdb",
  port: 3306, // Explicitly specify the MySQL port
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL connected successfully");
});

module.exports = db;
