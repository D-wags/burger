

var connection = require('../config/connection.js');

var orm = {
    selectAll: function (table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
    insertOne: function (table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table + '(' + cols + ')' + "VALUES('" + [vals] + "')";
		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
    updateOne: function(table, col_name, burger_id, cb) {
    	var queryString = "UPDATE " + table + " SET " + col_name + "=1 " + "WHERE id=" + burger_id;
    	console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		})
	}
};

module.exports = orm;
