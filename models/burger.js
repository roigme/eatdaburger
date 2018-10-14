var orm = require("../config/orm.js");

var burger = {
    all: function(rescallback) {
        orm.selectAll("burgers", function(res) {
            rescallback(res);
        })
    },
    create: function(burgerValue, rescallback) {
        orm.insertOne("burgers", "burger_name", burgerValue, function(res) {
            rescallback(res);
        })
    },
    update: function(condition, rescallback) {
        orm.updateOne("burgers", "devoured", condition, function(res) {
            rescallback(res);
        })
    }
}

module.exports = burger;