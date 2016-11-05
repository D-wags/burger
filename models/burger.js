
// var orm = require("../config/orm.js");

// var burger = {
// 	selectAll: function(){
// 		orm.selectAll('burgers');
// 	},

// 	insertOne: function(column, name) {
// 		orm.insertOne('burgers', column, name)
// 	},

// 	updateOne: function(column, name) {
// 		orm.updateOne('burgers', column, name)
// 	}

// }

// module.exports = burger;


var orm = require('../config/orm.js');

// ORM export functions
var burger = {
	insertOne: function(column,name,callback){
		//use orm function(table,col,name,callback). 
		orm.insertOne('burgers',column,name, function(returnData){
			//callback is passed as parameter when burger.insertOne is called in other file.
			callback(returnData);
		});
	},
	selectAll: function(callback){
		orm.selectAll('burgers',function(returnData){
			callback(returnData);
		});
	},
	
	updateOne: function(table,column,id,callback){
		orm.updateOne('burgers',column, id,function(returnData){
			callback(returnData);
		})
	},

	deleteOne: function(table,id,callback){
		orm.deleteOne('burgers',id,function(returnData){
			callback(returnData);
		})
	}
}


module.exports = burger;

