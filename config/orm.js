var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) { // retrieve all burgers on page load, and on insert One
        connection.query(`SELECT * FROM ${table}`, function(err, result) {
            if (err) throw err;
            cb(result);
        })

    },
    insertOne: function(table, colVal, burgerName, cb) { //insert a burger with a default false devoured
        connection.query(`INSERT INTO ${table} (${colVal}) VALUES (?)`, [burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        })

    }, //update the devoured to true when its devoured
    updateOne: function(table, colVal, condition, cb) {
        connection.query(`UPDATE ${table} SET ${colVal} = 1 WHERE ${condition}`, function(err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;