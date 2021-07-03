var user = require("../models/user.js");
var path = require("path");

module.exports = (req, res) => {
    user.create(req.body, (error, user) => {
        res.redirect("/");
    })
};