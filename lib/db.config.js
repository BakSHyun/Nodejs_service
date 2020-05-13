var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'medipix',
  database:''
});
db.connect();
module.exports = db;
