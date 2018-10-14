var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.burger_name);
    burger.create(req.body.burger_name, function(data) {
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burgerCriteria = `id = ${req.params.id}`;

    burger.update(burgerCriteria, function(data) {
        res.redirect("/");
    });
});
module.exports = router;