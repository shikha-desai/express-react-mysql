const mysql = require('mysql');

module.exports = function(app,connection)  {
    app.get('/', function(req,res) {
        // res.send(`Hello from simple-react project`);
        connection.query(`SELECT * FROM sakila.customer`, function(err, data) {
            (err) ? res.send(err) : res.json({customers:data});
        });
    });
};