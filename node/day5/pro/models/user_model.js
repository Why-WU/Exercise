var db = require("./db.js");

exports.insert_data = function(name, pass, callback) {
  var sql = "insert into t_users(ACCOUNT,PASSWORD) values(?,?)";
  db.query(sql, [name, pass], callback);
};

exports.sel_data = function(name, pass, callback) {
  var sql = "select * from t_users where ACCOUNT=? and PASSWORD=?";
  db.query(sql, [name, pass], callback);
};

exports.checkname = function(name, callback) {
  var sql = "select * from t_users where ACCOUNT=?";
  db.query(sql, [name], callback);
};

/*
//连接数据库

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'blog',
});

exports.insert_data=function(name,pass,callback){
	pool.getConnection(function(err, connection) {
	  if (err) throw err; // not connected!
	 
	  // Use the connection
	  connection.query('SELECT * FROM t_users', function (error, results, fields) {
	    // When done with the connection, release it.
	    connection.release();
	 
	    // Handle error after the release.
	    if (error) throw error;
	    callback(error,results);
	 
	    // Don't use the connection here, it has been returned to the pool.
	  });
});
}*/
