var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "educatodos"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});