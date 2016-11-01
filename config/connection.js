var mysql = require('mysql');
//connection details. Modified for online usage.
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'hippo666',
    database: 'sandbox_db'
});

conn.connect(function(err) {

    if(err) {
        console.log(err)
        throw err;
        }

        console.log('connected as id ' + connection.threadId);
            
    }); 

module.exports = connection;