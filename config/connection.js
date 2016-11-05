var mysql = require('mysql');
//connection details. Modified for online usage.
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hippo666',
    database: 'burgers_db'
});

connection.connect(function(err) {

    if(err) {
        console.log(err)
        
        }

        console.log('connected as: ' + connection.threadId);
            
    }); 

module.exports = connection;