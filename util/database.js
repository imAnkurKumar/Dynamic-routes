const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete-1",
  password: "T#9758@QLPH",
});
module.exports = pool.promise();